/**
 * image copy task
 *
 * @version  1.0.0
 * @author
 * @license  MIT
 */
var gulp = require('gulp'),
  config = require('../config'),
  $ = require('../plugins');

gulp.task('copy', function() {
  return gulp.src(config.path.image.src)
    .pipe($.imagemin(config.imagemin))
    .pipe(gulp.dest(config.path.image.dest));
});
