/**
 * style task use sass
 *
 * @version  1.0.0
 * @author
 * @license  MIT
 */
var gulp = require('gulp'),
  config = require('../config'),
  $ = require('../plugins');

gulp.task('style', function() {
  return gulp.src(config.path.style.src)
    .pipe($.plumber({
      errorHandler: $.notify.onError('<%= error.message %>')
    }))
    .pipe($.frontnote(config.styleguide))
    .pipe($.sass(config.style.sass))
    .pipe($.postcss([
      require('autoprefixer'),
      require('css-mqpacker')
    ]))
    .pipe(gulp.dest(config.path.style.dest))
    .pipe($.browser.stream({match: '**/*.css'}));
});
