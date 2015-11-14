var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');
var notify = require('gulp-notify');
var gutil = require('gulp-util');

var nodemonOptions = {
    script: 'bin/www',
    ext: 'js',
    env: { 'NODE_ENV': 'development' },
    verbose: false,
    ignore: ['public/*', 'node_modules/*', 'views/*', 'gulpfile.js', 'webpack.config.js']
};

gulp.task('start', function () {
    nodemon(nodemonOptions)
        .on('restart', function () {
            console.log('restarted!');
            notify('Node Server Restarted');
        });
});


/**
 * Webpack Setup
 * @type {webpackConfig}
 */
var webpackConfig = require('./webpack.config.js');
webpackConfig.watch = true;

gulp.task('webpack:build-dev', function() {
    gulpWebpack(webpackConfig, webpack, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build-dev", err);
        gutil.log("[webpack:build-dev]", stats.toString({
            colors: true
        }));
    });
});

gulp.task('default', ['start', 'webpack:build-dev']);