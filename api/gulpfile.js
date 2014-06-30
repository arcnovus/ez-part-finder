/*jslint node: true */
(function (global) {

    'use strict';

    var gulp = require('gulp'),
        nodemon = require('gulp-nodemon'),
        jshint = require('gulp-jshint'),
        jasmine = require('gulp-jasmine');

    gulp.task('lint', function () {
        gulp.src('./**/*.js')
            .pipe(jshint());
    });

    gulp.task('test', function () {
        gulp.src('tests/**/*spec.js ')
            .pipe(jasmine());
    });


    gulp.task('develop', function () {
        console.log(process.env.NODE_ENV);
        nodemon({
            script: 'server.js',
            ext: 'js'
        })
            .on('start', function () {
                console.log('started!');
            })
            .on('restart', function () {
                console.log('restarted!');
            });
    });


}(this));
