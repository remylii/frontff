/**
 * gulp configuration file.
 *
 * @version  1.0.0
 * @author
 * @since    2016/03/22
 * @license  MIT
 */
var config = {
  karma: {
    configFile: 'karma.conf.js'
  },

  browser: {
    server: {
      baseDir: 'public',
      ghostMode: {
        clicks: true,
        location: true,
        forms: true,
        scroll: true
      }
    },
    notify: false,
    open: false
  },

  htmlhint: '.htmlhintrc',

  ejs: {
    options: {},
    settings: {
      // since gulp-ejs >= 2.0.0, must set `ext` option
      ext: '.html'
    }
  },

  style: {
    autoprefixer: {
      browser: ['last 3 version', 'ie >= 9', 'Android 4.0']
    },

    // sass
    sass: {
      outputStyle: 'compressed',
      includePaths: ['node_modules/bootstrap-sass/assets/stylesheets/'], // bootstrap-sass
    }
  },
  styleguide: {
    css: '../../css/style.css',
    out: './public/styleguide/',
    clean: true
  },

  // sprite use gulp.spritesmith
  sprite: {
    spritesmith: {
      imgName: 'sprite.png',
      cssName: '_sprite.scss',
      imgPath: '/images/sprite/sprite.png',
      cssFormat: 'scss',
      cssVarMap: function(sprite) {
        sprite.name = 'sprite-' + sprite.name;
      }
    },
    img: {
      dest: 'public/images/sprite/'
    },
    css: {
      dest: 'src/sass/sprite/'
    }
  },

  // imagemin
  imagemin: {
    progressive: true,
    optimizationLevel: 7
  },

  // gulp tasks path
  path: {
    js: {
      src: ['src/js/*.js', '!src/js/components/*.js'],
      dest: 'public/js',
      watch: 'src/js/**/*.js'
    },
    ejs: {
      src: ['src/view/**/*.ejs', '!src/view/**/_*.ejs'],
      dest: 'public',
      watch: 'src/view/**/*.ejs'
    },
    html: {
      src: ['public/**/*.html', '!public/styleguide/**/*.html'],
      watch: ['public/**/*.html', '!public/styleguide/**/*.html']
    },
    style: {
      src: 'src/sass/**/*.scss',
      dest: 'public/css',
      watch: ['src/sass/**/*.scss']
    },
    sprite: {
      src: ['src/images/sprite/**/*.{png,jpeg,jpg}'],
      watch: ['src/images/sprite/**/*.{png,jpeg,jpg}']
    },
    image: {
      src: ['src/images/**/*.{png,jpeg,jpg,gif}', '!src/images/sprite/**/*.{png,jpeg,jpg}'],
      dest: 'public/images',
      watch: ['src/images/**/*.{png,jpeg,jpg,gif}', '!src/images/sprite/**/*.{png,jpeg,jpg}']
    },
    clean: {
      image: {
        ext: '{png,jepg,jpg,gif}',
        baseDir: 'src/images',
        destDir: 'public/images',
        entry: []  // set to _setImageDirectory task
      }
    }
  }
};

module.exports = config;
