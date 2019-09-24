const webpack = require('webpack');
const configure = require('./webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = configure({
    mode: 'production',
    output: {
        filename: '[name]-[chunkhash].js',
        chunkFilename: '[name]-[chunkhash].js',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEV__: false,
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false,
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
});

config.entry.vendor = ['react', 'react-dom'];
module.exports = config;
