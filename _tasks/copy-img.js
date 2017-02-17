// Load plugins
var gulp = require('gulp');

// Copies the assetts from the pearson elements library and brings them into UI / Pattern Lab.

gulp.task('copy-img', function() {
    gulp.src("ui/images/**")
        .pipe(gulp.dest('pattern-lab/source/images/'))
        .pipe(gulp.dest('pattern-lab/public/images/'));
});
