var postcss = require('gulp-postcss');
var gulp = require('gulp');
var autoprefixer = require('autoprefixer');

gulp.task('autoprefix',['compile-scss'], function () {
    var plugins = [
        autoprefixer({browsers: ['last 2 version', 'safari > 6', 'ie 11', 'opera 12.1', 'ios 6', 'android > 3','Firefox > 47']}),
    ];
    return gulp.src('pattern-lab/source/css/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('pattern-lab/source/css'))
        .pipe(gulp.dest('pattern-lab/public/css'));
});
