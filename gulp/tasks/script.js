/**
 * javascript task use webpack
 *
 * @version  1.0.0
 * @author
 * @license  MIT
 */
var gulp  = require('gulp'),
  config  = require('../config'),
  $       = require('../plugins'),
  path    = require('path'),
  named   = require('vinyl-named'),
  through = require('through2'),
  webpackConf = require('../../webpack.config.js');

/**
 * webpackのentryを設定
 *
 */
gulp.task('_setEntry', function() {
  return gulp.src(config.path.js.src)
    .pipe(through.obj(function(file, charset, callback) {
      var fileName = path.basename(file.path).replace(/\.(ts|js)$/, '');
      webpackConf.entry[fileName] = file.path;
      this.push(file);
      callback();
    }));
});

/**
 * execute gulp-webpack
 *
 */
function gulpScript(w) {
  webpackConf.watch = w || false;

  gulp.src(config.path.js.src)
    .pipe($.webpack(webpackConf))
    .pipe(gulp.dest(config.path.js.dest))
    .pipe($.browser.stream());
}

gulp.task('script', ['_setEntry'], function() {
  return gulpScript(false);
});
