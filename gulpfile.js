var gulp = require('gulp'),
    jade = require('gulp-jade'),
    jshint = require('gulp-jshint'),
    watch = require('gulp-watch');

gulp.task('jade', function () {
   return gulp.src('./src/**/*.jade')
       .pipe(jade())
       .pipe(gulp.dest('./app'));
});

gulp.task('jshint', function () {
   return gulp.src('./src/**/*.js')
       .pipe(jshint())
       .pipe(jshint.reporter('default'))
       .pipe(gulp.dest('./app'));
});

gulp.task('watch', function () {
   gulp.watch('./src/**/*.jade', ['jade']);
   gulp.watch('./src/**/*.js', ['jshint']);
});

gulp.task('default', ['jade', 'jshint', 'watch']);