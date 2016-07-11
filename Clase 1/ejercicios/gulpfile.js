'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');


// SassyCSS
var sassSrc = './**/*.scss';
 
gulp.task('sass', function () {
  return gulp.src(sassSrc)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(sassSrc, ['sass']);
});


// SCSS
var scssSrc = './**/*.sass';
 
gulp.task('scss', function () {
  return gulp.src(scssSrc)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('.'));
});
 
gulp.task('scss:watch', function () {
  gulp.watch(scssSrc, ['scss']);
});