const webpack = require('webpack');
const path = require('path');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const configure = require('./webpack');

const config = configure({
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: true,
        }),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
        }),
    ],
});
config.entry.app.unshift('react-hot-loader/patch', 'webpack-hot-middleware/client');
config.module.rules[0].options = { plugins: ['react-hot-loader/babel'], cacheDirectory: path.resolve('/tmp/webpack') };
// config.module.rules[0].options.plugins.push('react-hot-loader/babel');
// config.module.rules[0].options.cacheDirectory = path.resolve('/tmp/webpack');

module.exports = config;
