const path = require('path')
const webpack = require('webpack')
const vueConfig = require('./vue-loader.config')

module.exports = {
    devtool: '#source-map',
    entry: {
        app: './src/client-entry.js',
        vendor: ['babel-polyfill', 'whatwg-fetch', 'vue', 'vue-router', 'vuex', 'lru-cache', 'es6-promise']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename: 'client-bundle.js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.css$/,
            loader: "style!css"
        },{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.(png|jpg|gif|svg|webp)$/,
            loader: 'url',
            query: {
                limit: 10000,
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }, {
            test: /\.json$/,
            loader: 'json'
        }]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            vue: vueConfig
        }),
        new webpack.ProvidePlugin({
            $: 'webpack-zepto',
            jQuery: 'webpack-zepto'
        })
    ]
}
