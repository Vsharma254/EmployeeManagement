var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
module.exports = {

    entry: {
        'app': path.join(__dirname, 'src/main.ts'),
        'polyfills': [
            'core-js/es6',
            'core-js/es7/reflect',
            'zone.js/dist/zone'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    context: path.join(__dirname, 'src'),

    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.component.ts$/, loader: 'ts-loader!angular2-template-loader' },
            { test: /\.ts$/, exclude: /\.component.ts$/, loader: 'ts-loader' },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.css$/, loader: 'raw-loader' }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.ts', '.html', '.css']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'polyfills'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html')
        }),
        new webpack.DefinePlugin({
            app: {
                environment: JSON.stringify(process.env.APP_ENVIRONMENT || 'development')
            },
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new CopyWebpackPlugin([
            { from: 'static' }
        ])
    ]
};