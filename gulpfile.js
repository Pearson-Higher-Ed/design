// Load plugins
var gulp = require('gulp'),
    notify = require('gulp-notify'),
    requireDir = require('require-dir'),
    tasks = requireDir('./_tasks'),
    exec = require('child_process').exec;

// Installs and configures setup
gulp.task('install', ['install-pattern-lab', 'install-elements', 'configure']);

// Runs Patternlab
gulp.task('default', function(cb) {
    gulp.start('autoprefix');
    exec('node_modules/edition-node-gulp/node_modules/gulp/bin/gulp.js patternlab:build --gulpfile node_modules/edition-node-gulp/gulpfile.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
    exec('node_modules/edition-node-gulp/node_modules/gulp/bin/gulp.js patternlab:serve --gulpfile node_modules/edition-node-gulp/gulpfile.js', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
    gulp.watch('node_modules/edition-node-gulp/*.json', ['default']);
    gulp.watch('pattern-lab/scss/*.scss', ['autoprefix']);
    gulp.watch('pattern-lab/scss/**/*.scss', ['autoprefix']);
    gulp.watch('pattern-lab/source/_patterns/**/*.scss', ['autoprefix']);
    gulp.watch('pattern-lab/source/_patterns/**/**/*.scss', ['autoprefix']);
    gulp.watch('pattern-lab/source/js/*.js', ['babel']);
    gulp.watch('ui/js/*.js', ['copy-js']);
    gulp.watch('ui/images/**/*', ['copy-img']);
});
