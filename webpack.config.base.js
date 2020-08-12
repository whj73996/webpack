const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[contenthash].js'
    },

    plugins: [
        new HtmlWebpackPlugin({
        template: 'src/assets/index.html'
        }),
    ],

};

