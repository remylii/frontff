/**
 * image directory clean up task
 *
 * @version  1.0.0
 * @author
 * @license  MIT
 */
var gulp = require('gulp'),
  config = require('../config'),
  $ = require('../plugins'),
  path    = require('path'),
  named   = require('vinyl-named'),
  through = require('through2'),
  del     = require('del');

var cleanDirArr = [];

gulp.task('_setImageDirectory', function() {
  return gulp.src(config.path.image.src)
    .pipe(through.obj(function(file, charset, callback) {
      var regexp = new RegExp(config.path.clean.image.baseDir + '(.*?)$');
      var matches = path.dirname(file.path).match(regexp);
      var destPath = config.path.clean.image.destDir + '/*.' + config.path.clean.image.ext;

      if (matches[1] !== '') {
        destPath = config.path.clean.image.destDir + matches[1];
      }
      if (config.path.clean.image.entry.indexOf(destPath) < 0) {
        config.path.clean.image.entry.push(destPath);
      }
      callback();
    }));
});

gulp.task('clean', ['_setImageDirectory'], function() {
  return del(config.path.clean.image.entry);
});
