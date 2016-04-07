/**
 * gulp-load-plugins
 *
 * @version  1.0.0
 * @author
 * @license  MIT
 */
var loader = require('gulp-load-plugins'),
  browser = require('browser-sync');

var $ = loader({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

$.browser = browser;
module.exports = $;
