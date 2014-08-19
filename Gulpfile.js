var gulp = require('gulp'),
    server = require('gulp-webserver'),
    less = require('gulp-less'),
    ap = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify');

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
        .pipe(cssmin())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('js', function() {
  gulp.src(['./dev/js/jquery.min.js', './dev/js/arcticmodal.js', './dev/js/retina.min.js', './dev/js/main.js'])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
});

// Watch
gulp.task('watch', function () {
  gulp.watch('./dev/less/*.less', ['less']);
});

// Default
gulp.task('default', ['server', 'watch']);