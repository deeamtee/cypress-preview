import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname); // eslint-disable-line

const PROXY_TARGETS = {
    dev: 'dev',
    test: 'test',
};

export default {
    env: process.env.NODE_ENV || 'development',

    server: {
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 3000,
    },

    dirs: {
        app: path.join(__dirname, '../src'),
        server: path.join(__dirname, './'),
    },

    proxyTarget: PROXY_TARGETS.test,
};
