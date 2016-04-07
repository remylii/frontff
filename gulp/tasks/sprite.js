/**
 * css sprite task use gulp.spritesmith
 *
 * @see https://github.com/twolfson/gulp.spritesmith
 * @version  1.0.0
 * @author
 * @license  MIT
 */
var gulp = require('gulp'),
  config = require('../config'),
  $ = require('../plugins');

gulp.task('sprite', function() {
  var spriteData = gulp.src(config.path.sprite.src)
    .pipe($.spritesmith(config.sprite.spritesmith));

  spriteData.img
    .pipe(gulp.dest(config.sprite.img.dest));

  spriteData.css
    .pipe(gulp.dest(config.sprite.css.dest));
});
