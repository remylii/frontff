/**
 * gulp default task
 *
 * @version  1.0.0
 * @author
 * @license  MIT
 */
var gulp = require('gulp'),
  tasks  = ['server', 'karma', 'watch'];

gulp.task('default', tasks);
