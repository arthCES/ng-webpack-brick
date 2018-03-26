const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const help = require('./config/helper');

const chalk = require('chalk');

console.log(`${chalk.underline('Running in Environment:')} ${chalk.bold.green('Prod env')}`);

const PATHS = {
    src: help.root('./src/app/features'),
    build: help.root('./webpack-build')
};

module.exports = {
    context: PATHS.src,

    entry: {
        features: './index.ts',
    },

    output: {
        path: PATHS.build,
        filename: '[name].js',
        library: 'ComponentLibrary',
        libraryTarget: 'umd'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [{
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader']
            },
            {
                test: /\.css$/,
                loaders: 'style-loader!css-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
        ]
    },
    devtool: 'source-map'
};