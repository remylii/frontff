/**
 * browser-sync task
 *
 * @version  1.0.0
 * @author
 * @license  MIT
 */
var gulp = require('gulp'),
  config = require('../config'),
  $ = require('../plugins');

gulp.task('server', function() {
  return $.browser(config.browser);
});
