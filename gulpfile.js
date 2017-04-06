var gulp = require('gulp'),
    util = require('gulp-util'),
    concat = require('gulp-concat');

var jsSrc = ['dev/scripts/*.js'];

gulp.task('log', function () {
    util.log('Starting project workflow');
});

gulp.task('js', function () {
    gulp.src(jsSrc)
        .pipe(concat('script.js'))
        .pipe(gulp.dest('assets/js'))
});