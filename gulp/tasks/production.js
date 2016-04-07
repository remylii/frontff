/**
 * production build task
 *
 * @version  1.0.0
 * @author
 * @license  MIT
 */
var gulp = require('gulp'),
  config = require('../config'),
  $ = require('../plugins'),
  runSequence = require('run-sequence');

gulp.task('production', function() {
  return runSequence(
    'clean', 'copy',
    'sprite',
    ['style', 'script', 'ejs'],
    'html', 'htmlmin',
    '_production_build_notice_'
  );
});

gulp.task('_production_build_notice_', function() {
  return gulp.src('/')
    .pipe($.notify({
      message: 'production build tasks is completed! ╭( ･ㅂ･)و',
      title: 'Production Build',
      sound: 'Glass'
  }));
});
