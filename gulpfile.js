var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var dest = '../wp-content/themes/twentyseventeen-child';

gulp.task('browserSync', function() {
  browserSync.init({
    proxy: 'localhost:8888'
  })
});

gulp.task('sass', function() {
  return gulp.src('styles/*.scss')
  	.pipe(sass()) 
  	.pipe(gulp.dest(dest))
  	.pipe(browserSync.reload({
  		stream: true
  	}))
});

gulp.task('views', function() {
  return gulp.src('pages/*.php')
   .pipe(gulp.dest(dest))
});

gulp.task('wp_config', function() {
  return gulp.src('config/*.php')
    .pipe(gulp.dest(dest))
});

gulp.task('scripts', function() {
  return gulp.src('scripts/*.js')
    .pipe(gulp.dest(dest + '/scripts'))
});

gulp.task('watch', ['browserSync', 'sass', 'scripts', 'wp_config', 'views'], function (){
  gulp.watch('styles/*.scss', ['sass']); 
  gulp.watch('pages/*.php', browserSync.reload); 
  gulp.watch('scripts/*.js', browserSync.reload);
});
