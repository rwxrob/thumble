var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    stylus = require('gulp-stylus'),
    autoprefix = require('gulp-autoprefixer'),
    cssmin = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    jade = require('gulp-jade'),
    htmlmin = require('gulp-minify-html'),
    size = require('gulp-size');

var paths = {
  stylus: [
    'node_modules/css-colors-solarized/styles'
  ]
};

gulp.task('scripts', function(){
  gulp.src('src/scripts/thumble.js')
    .pipe(jshint())
    .pipe(gulp.dest('scripts'))
    .pipe(uglify())
    .pipe(rename('thumble.min.js'))
    .pipe(gulp.dest('scripts'));
  gulp.src('src/scripts/demo.js')
    .pipe(jshint())
    .pipe(gulp.dest('scripts'))
    .pipe(uglify())
    .pipe(rename('demo.min.js'))
    .pipe(gulp.dest('scripts'));
});

gulp.task('styles', function(){
  gulp.src('src/styles/thumble.styl')
    .pipe(stylus({paths: paths.stylus}))
    .pipe(autoprefix('last 2 versions'))
    .pipe(rename('thumble.css'))
    .pipe(gulp.dest('styles'))
    .pipe(cssmin())
    .pipe(rename('thumble.min.css'))
    .pipe(gulp.dest('styles'));
  gulp.src('src/styles/demo.styl')
    .pipe(stylus({paths: paths.stylus}))
    .pipe(autoprefix('last 2 versions'))
    .pipe(rename('demo.css'))
    .pipe(gulp.dest('styles'))
    .pipe(cssmin())
    .pipe(rename('demo.min.css'))
    .pipe(gulp.dest('styles'));
});

gulp.task('favicon',function(){
  gulp.src('src/images/favicon.ico')
    .pipe(gulp.dest('.'));
});

gulp.task('images',['favicon'],function(){
  gulp.src('src/images/*')
    .pipe(gulp.dest('images'));
});

gulp.task('clean',function(){
  gulp.src(['*.html', '*.ico', 'images', 'scripts', 'styles'],
    {read: false})
    .pipe(clean());
});

gulp.task('html', function(){
  gulp.src('src/html/*.html')           
    .pipe(gulp.dest('.'));
  gulp.src('src/html/*.jade')           
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('.'));
});

gulp.task('default',['scripts','styles','images','html'],function(){
  gulp.watch('src/styles/*.styl', ['styles','html']);
  gulp.watch('src/scripts/*.js', ['scripts','html']); 
  gulp.watch('src/images/*', ['images']);
  gulp.watch('src/html/*.{html,jade}', ['html']);
});
