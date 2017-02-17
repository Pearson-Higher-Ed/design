var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify');

gulp.task('compile-scss', function () {
    return sass('pattern-lab/scss/*.scss', {
            style: 'expanded',
            lineNumbers: true
        })
        .pipe(gulp.dest('pattern-lab/source/css'))
        .pipe(gulp.dest('ui/css'));
});