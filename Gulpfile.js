var gulp = require('gulp'),
    server = require('gulp-webserver'),
    less = require('gulp-less'),
    ap = require('gulp-autoprefixer');

// Web serever
gulp.task('server', function() {
  return gulp.src('./build/')
    .pipe(server({
      livereload: true,
    }));
});

// Less
gulp.task('less', function () {
    return gulp.src('./dev/less/main.less')
        .pipe(less())
        .pipe(ap("last 1 version", "> 1%", "ie 8", "ie 7"))
        .pipe(gulp.dest('./build/css'));
});

// Watch
gulp.task('watch', function () {
  gulp.watch('./dev/less/*.less', ['less']);
});

// Default
gulp.task('default', ['server', 'watch']);