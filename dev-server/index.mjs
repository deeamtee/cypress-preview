import path from 'path';
import express from 'express';
import chalk from 'chalk';
import config from './config';
import { DEVELOPMENT_CONFIG, TEST_CONFIG, PRODUCTION_CONFIG } from './auth-config';
// import getToken from './token';
import headers from './middleware/headers';
import hot from './middleware/hot';
import mocks from './api/mocks';
import proxy from './api/proxy';
import { getLocalsIP } from './utils';

const API_PATH = ``;
const __dirname = path.dirname(new URL(import.meta.url).pathname); // eslint-disable-line

const AUTH_CONFIGS = {
    dev: DEVELOPMENT_CONFIG,
    test: TEST_CONFIG,
    prod: PRODUCTION_CONFIG,
};

(async () => {
    // const token = await getToken();
    const token = '';

    const app = express();
    const compiler = hot(app, { token });
    headers(app, config);

    const { PROXY } = process.env;
    PROXY ? app.use(`/api`, proxy()) : app.use(API_PATH, mocks());

    app.get('/favicon.ico', (req, res) => {
        res.sendFile(config.dirs.app + '/favicon.ico');
    });

    app.get('/settings.json', (req, res) => {
        res.send(AUTH_CONFIGS[config.proxyTarget]);
    });

    /*
    if you need test builded app, change path to vendor, app in dist/index.html with prefix `/build/`
    e.g. /built/vendor-02b7650ec8097f0ae04e.js, /built/app-a023a01bb1cc5989235a.js
    */
    app.get('/built', (req, res) => {
        const file = path.resolve(__dirname, '../dist/index.html');
        res.sendFile(file);
    });

    app.get('/built/:file', (req, res) => {
        const file = path.resolve(__dirname, `../dist/${req.params.file}`);
        res.sendFile(file);
    });

    // Hack for WebpackHtmlPlugin
    // @see https://github.com/jantimon/html-webpack-plugin/issues/145
    app.get('*', (req, res, next) => {
        const filename = path.join(compiler.outputPath, 'index.html');
        compiler.outputFileSystem.readFile(filename, (err, result) => { // eslint-disable-line consistent-return
            if (err) {
                return next(err);
            }

            res.set('Content-Type', 'text/html');
            res.send(result);
            res.end();
        });
    });

    app.use((error, req, res, next) => { // eslint-disable-line no-unused-vars
        console.error(error); // eslint-disable-line no-console

        res.status(401);
        res.json({ error: { message: error.message } });
    });

    app.listen(config.server.port, () => {
        const network = chalk.hex('#DEADED').bold;
        const mode = chalk.hex('#CCFF00').bold;
        const addresses = getLocalsIP();
        console.log(network('Local:           ', 'http://' + config.server.host + ':' + config.server.port)); // eslint-disable-line no-console
        addresses.map(ip => console.log(network('On your network: ', `http://${ip}:${config.server.port}`))); // eslint-disable-line no-console
        PROXY ? console.log(mode('Server started with proxy')) : console.log(mode('Server started with mocks')); // eslint-disable-line no-console
    });
})();
