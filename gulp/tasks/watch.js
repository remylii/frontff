/**
 * watch task
 *
 * @version  1.0.0
 * @author
 * @license  MIT
 */
var gulp = require('gulp'),
  config = require('../config');

gulp.task('watch', function() {
  gulp.watch(config.path.ejs.watch, ['ejs']);
  gulp.watch(config.path.sprite.watch, ['sprite']);
  gulp.watch(config.path.style.watch, ['style']);
  gulp.watch(config.path.js.watch, ['script']);
  gulp.watch(config.path.html.watch, ['html']);
  gulp.watch(config.path.image.watch, ['copy']);
});
