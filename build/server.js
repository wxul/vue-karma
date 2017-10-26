'use strict';

const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.dev.config.js');

const config = require('./config');

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
    stats: {
        colors: true
    }
});

server.listen(config.devPort, '127.0.0.1', () => {
    console.log(`Starting server on http://localhost:${config.devPort}`);
});