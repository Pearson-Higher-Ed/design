var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("babel", function () {
    return gulp.src("pattern-lab/source/js/*.js")
        .pipe(babel())
        .pipe(gulp.dest("pattern-lab/source/js/dist/"))
        .pipe(gulp.dest("pattern-lab/public/js/dist/"));
});
