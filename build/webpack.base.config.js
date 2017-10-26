'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config');
const ENV = config.ENV;

let include = [path.resolve(__dirname, '../src/')];

module.exports = {
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                include: include
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: include
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: ['url-loader']
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: ['url-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            vue$: 'vue/dist/vue.js',
            '@src': path.resolve(__dirname, '../src'),
            '@c': path.resolve(__dirname, '../src/components')
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify(ENV)
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: true,
            env: process.env.NODE_ENV,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: false
            }
        })
    ]
};
