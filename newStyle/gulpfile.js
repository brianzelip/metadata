
var gulp = require('gulp');
var uncss = require('gulp-uncss');
var rename = require('gulp-rename');
var basswork = require('gulp-basswork');
var webserver = require('gulp-webserver');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function() {
  gulp.src('./src/css/base.css')
    .pipe(basswork())
    .pipe(uncss({
      html: ['./index.html']
    }))
    .pipe(autoprefixer({
      browsers: ['last 5 versions'],
      cascade: true
    }))
    .pipe(gulp.dest('./css'))
    .pipe(minifyCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css'));
});

gulp.task('serve', function() {
  gulp.src('.')
    .pipe(webserver({}));
});

gulp.task('default', ['css', 'serve'], function() {
  gulp.watch(['./src/**/*'], ['css']);
  gulp.watch(['./index.html'], ['css']);
});

