'use strict';

const path = require('path');
const webpack = require('webpack');
const webpackBaseConfig = require('./webpack.base.config.js');

const config = require('./config');

webpackBaseConfig.devServer = {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: config.devPort
};

module.exports = Object.assign({}, webpackBaseConfig, {
    entry: {
        app: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: '/',
        sourceMapFilename: '[file].map',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].js'
    }
});
