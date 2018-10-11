var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputDirectory = 'dist';

module.exports = {
    entry: path.join(__dirname, '..', 'client', 'App.js'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'index_bundle.js'
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/env', '@babel/react']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '..', 'client', 'index.html'),
        })
    ]
}