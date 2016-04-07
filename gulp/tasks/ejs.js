/**
 * gulp-ejs task
 *
 * @version  1.0.0
 * @author
 * @license  MIT
 */
var gulp = require('gulp'),
  config = require('../config'),
  $ = require('../plugins');

gulp.task('ejs', function() {
  return gulp.src(config.path.ejs.src)
    .pipe($.plumber({
      errorHandler: $.notify.onError('<%= error.message %>')
    }))
    .pipe($.ejs(config.ejs.options, config.ejs.settings))
    .pipe(gulp.dest(config.path.ejs.dest))
    .pipe($.browser.stream());
});
