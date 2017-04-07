var gulp = require('gulp'),
    util = require('gulp-util'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat');

var jsSrc = ['dev/scripts/*.js'];
var sassSrc = ['dev/sass/style.scss'];

gulp.task('log', function () {
    util.log('Starting project workflow');
});

gulp.task('js', function () {
    gulp.src(jsSrc)
        .pipe(concat('script.js'))
        .pipe(browserify())
        .pipe(gulp.dest('assets/js'))
});

gulp.task('compass', function () {
    gulp.src(sassSrc)
        .pipe(compass({
            css: 'assets/css',
            sass: 'dev/sass',
            style: 'compressed', // can be nested, expanded, compact and compressed
            image: 'dev/img'
        }))
        //.on('error', gutil.log)
        .pipe(gulp.dest('assets/css'));
});