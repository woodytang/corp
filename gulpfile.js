'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});

var htmlImport = require('gulp-html-import');

gulp.task('import', function () {
    gulp.src('./src/html/index.html')
        .pipe(htmlImport('./src/html/components/'))
        .pipe(gulp.dest('./')); 
})

gulp.task('import:watch', function () {
  gulp.watch('./src/html/index.html', ['import']);
});


gulp.task('default', ['sass:watch', 'import:watch']);

