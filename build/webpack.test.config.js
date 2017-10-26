'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        js: 'babel-loader'
                    },
                    postLoaders: {
                        js: 'istanbul-instrumenter-loader?esModules=true'
                    }
                }
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
    }
};
