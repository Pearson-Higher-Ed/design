var gulp = require('gulp');
var prettify = require('gulp-html-prettify');

gulp.task('format-html', function() {
    gulp.src('./dest/**/*.html')
        .pipe(prettify({indent_char: ' ', indent_size: 4}))
        .pipe(gulp.dest('./dest/'))
});
