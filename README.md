Web Development Fast Forward
============================

Generate a source of website via gulp. Output source are html, css, javascript and images.  
This is develop tool for my own.

## How to use

```
$ npm install
$ gulp
```

---

## gulp tasks

Gulp task is in `gulp/tasks` directory. gulpfile.js load there.

## html

relations tasks: **ejs**, **html**, **htmlmin**  

The html task uses ejs template. and use htmlhint for syntax.

### convert

`src/view/**/*.ejs` -> `public/**/*.html`

## style sheet

relations tasks: **style**, **sprite**    
The style task uses sass with scss syntax. It creates style-guide at the same time.

### convert

`src/scss/*.scss` -> `public/css/*.css`

## sprite style sheet

relations tasks: **sprite**  

The sprite task uses 'gulp.spritesmith'. It creates sprite image file and sprite stylesheets,'sprite.png' and '_sprite.scss'.

NOTE: The sprite styelsheet is in src directory.

### convert

`src/images/sprite/**/*.{png,jpg,jpeg,gif}` -> `public/images/sprite/sprite.png`


## javascript

relations tasks: **sript**  

The script task uses webpack. Important fact is that ES6 is unsupported to this task. Sorry, but I'll do it.

### convert

`src/js/*.js` -> `public/js/*.bundle.js`

#### plugins

* UglifyJsPlugin

## karma

relations tasks: **karma**  

The task is unit test for javascript components. Using framework is  karam-jasmine.  
Karma server watch file `spec/*Spec.js`.

## images

relations tasks: **copy**

The task uses plugins 'imagemin'. It works to copy image file to public directory from source directory. at the same time, Image files are optimized.

## production build

relations tasks: **production**  

Comes bundled with the following task:

* clean -- remove image files in public directory without sprite directories.
* copy
* sprite
* style
* script
* ejs
* html
* htmlmin -- minify html.
* \_production\_build\_notice\_ -- for builde result notice.
