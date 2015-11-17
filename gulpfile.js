var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    plumber = require('gulp-plumber');

gulp.task('sass', function () {
  return sass('public/components/sass/**/*.scss')
    .on('error', sass.logError)
    .pipe(gulp.dest('public/css/'));
});

gulp.task('watch', function (){
    gulp.watch('public/components/sass/**/*.scss', ['sass']);
})

gulp.task('default',['watch'])
