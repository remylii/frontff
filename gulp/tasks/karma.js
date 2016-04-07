/**
 * karma tasks. use jasmine, webpack
 *
 * @version  1.0.0
 * @author
 * @license  MIT
 */
var gulp = require('gulp'),
  config = require('../config'),
  Server = require('karma').Server;

gulp.task('karma', function() {
  var server = new Server({
    configFile: process.cwd() + '/' + config.karma.configFile
  });
  server.start();
});
