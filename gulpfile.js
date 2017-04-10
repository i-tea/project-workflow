var gulp = require('gulp'),
    util = require('gulp-util'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect');

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
        .pipe(connect.reload())
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
        .pipe(gulp.dest('assets/css'))
        .pipe(connect.reload());
});

gulp.task('connect', function(){
    connect.server({
        root: 'assets/',
        livereload: true

    });
});

gulp.task('watch', function () {
    gulp.watch(jsSrc, ['js']);
    gulp.watch('dev/sass/*.scss', ['compass']);


});

gulp.task('default', ['js', 'compass', 'connect', 'watch']);