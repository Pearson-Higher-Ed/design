// Load plugins
var gulp = require('gulp');

// Copies the assetts from the pearson elements library and brings them into UI / Pattern Lab.

gulp.task('copy-scss', function() {
    gulp.src("pattern-lab/scss/**/*.scss")
        .pipe(gulp.dest('ui/scss'));

    gulp.src("pattern-lab/source/_patterns/**/*.scss")
        .pipe(gulp.dest('ui/scss/_patterns/'));
});

