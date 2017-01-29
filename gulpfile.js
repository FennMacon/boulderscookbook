var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var dest = 'wp-content/themes/twentyseventeen-child';

gulp.task('browserSync', function() {
  browserSync.init({
    proxy: 'localhost:8888'
  })
});

gulp.task('sass', function() {
  return gulp.src('src/styles/*.scss')
  	.pipe(sass()) 
  	.pipe(gulp.dest(dest))
  	.pipe(browserSync.reload({
  		stream: true
  	}))
});

gulp.task('views', function() {
  return gulp.src('src/pages/*.php')
   .pipe(gulp.dest(dest))
});

gulp.task('wp_config', function() {
  return gulp.src('src/config/*.php')
    .pipe(gulp.dest(dest))
});

gulp.task('watch', ['browserSync', 'sass', 'wp_config', 'views'], function (){
  gulp.watch('src/styles/*.scss', ['sass']); 
  gulp.watch('src/pages/*.php', browserSync.reload); 
  gulp.watch('src/scripts/*.js', browserSync.reload);
});
