'use strict';

const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const rimraf = require('rimraf');
const path = require('path');

module.exports = {
    context: __dirname + '/src',
    entry: [
        "./js/app",
        'babel-polyfill'
    ],
    output: {
        path: __dirname + "/public/assets",
        publicPath: '/react-room-planner/assets/',
        filename: "js/bundle.js"
    },

    devtool: NODE_ENV == "development" ? "cheap-inline-module-source-map" : null,

    module: {
        /*preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                include: [
                    path.resolve(__dirname, "src")
                ]
            }
        ],*/
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /\/node_modules\//,
                include: [
                    path.resolve(__dirname, "src")
                ],
                loaders: ['react-hot', 'babel-loader'],
                plugins: ['transform-runtime']
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?browsers=last 2 versions')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            },
            {
                test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf)?(\?v=\d+.\d+.\d+)?$/,
                loader: 'file?name=[path][name].[ext]'
            }
        ]
    },

    plugins: [
        {
            apply: (compiler) => {
                rimraf.sync(compiler.options.output.path);
            }
        },
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({
            'Immutable': 'Immutable'
        }),
        new ExtractTextPlugin("styles/[name].css"),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(NODE_ENV != "production")
        })
    ],

    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: __dirname + "/public"
    }
};

if (NODE_ENV == "production") {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}
