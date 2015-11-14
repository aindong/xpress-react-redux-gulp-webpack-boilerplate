var path = require("path");
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: {
        app: "./public/javascripts/src/index.js",
    },
    output: {
        path: path.join(__dirname, "./public/javascripts/dist/"),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    // https://github.com/babel/babel-loader#options
                    cacheDirectory: true,
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new WebpackNotifierPlugin({title: 'Webpack'})
    ]
};