import webpack from 'webpack';
import webpackConfig from '../../scripts/webpack/webpack.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

export default (app) => {
    const compiler = webpack(webpackConfig);

    app.use([
        webpackDevMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath,
            historyApiFallback: false,
            noInfo: true,
            hot: true,
            silent: true,
            stats: 'errors-only',
        }),
        webpackHotMiddleware(compiler, {
            log: console.log, // eslint-disable-line no-console
            path: '/__webpack_hmr',
            heartbeat: 10 * 1000,
        }),
    ]);

    return compiler;
};
