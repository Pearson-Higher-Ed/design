// Load plugins
var gulp = require('gulp');

// Copies the assetts from the pearson elements library and brings them into UI / Pattern Lab.

gulp.task('copy-js', function() {
    gulp.src("ui/js/**")
        .pipe(gulp.dest('pattern-lab/source/js/'))
        .pipe(gulp.dest('pattern-lab/public/js/'));
});
