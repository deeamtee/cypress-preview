const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = configure;

/**
 * Directories constants
 * @type {string}
 */
const ROOT_PATH = path.join(__dirname, '../..');
const APP_PATH = path.join(__dirname, '../..', 'src');
const ICON_PATH = path.join(__dirname, '../..', 'src/Icon/resources');

/**
 * Base config for webpack
 * @type {Object}
 */
const config = {
    entry: {
        polyfills: [
            '@babel/polyfill',
        ],
        vendor: [
            'react',
            'react-dom',
        ],
        app: [
            './index.tsx',
        ],
    },
    output: {
        path: path.resolve(ROOT_PATH, 'dist'),
        publicPath: '/',
        chunkFilename: '[name].js',
        filename: '[name].js',
    },
    context: APP_PATH,
    target: 'web',
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2)$/,
                loader: 'url-loader',
                exclude: ICON_PATH,
                options: {
                    limit: 100000,
                },
            },
            {
                test: /\.svg$/i,
                include: ICON_PATH,
                loader: 'svg-sprite-loader',
                options: {
                    symbolId: 'ui-icon-[name]',
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            inject: false,
        }),
    ],
    performance: {
        hints: false,
    },
    stats: {
        children: false,
    },
};

/**
 * Build config for webpack
 *
 * @param {Object} options The options
 * @returns {Object} Retruns a new config
 */
function configure(options) {
    return merge(config, options);
}

configure.ROOT_PATH = ROOT_PATH;
configure.APP_PATH = APP_PATH;
