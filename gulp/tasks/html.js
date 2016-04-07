/**
 * gulp-htmlhint task
 *
 * @version  1.0.0
 * @author
 * @license  MIT
 */
var gulp = require('gulp'),
  config = require('../config'),
  $ = require('../plugins');

gulp.task('html', function() {
  return gulp.src(config.path.html.src)
    .pipe($.plumber({
      errorHandler: $.notify.onError('<%= error.message %>')
    }))
    .pipe($.htmlhint(config.htmlhint))
    .pipe($.htmlhint.reporter())
    .pipe($.htmlhint.failReporter());
});
