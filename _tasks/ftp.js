var gulp = require('gulp');
var sftp = require('gulp-sftp');

gulp.task('ftp', function () {
    return gulp.src('pattern-lab/public/**/*')
        .pipe(sftp({
            host: '10.72.9.195',
            user: 'root',
            pass: 'hnapoi4716&&9012',
            remotePath: '/home/webroot/ux-framework'
        }));
});