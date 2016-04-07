var webpack = require('webpack');
var webpackConf = {
  entry: {}, // _setEntry function
  output: {
    // path: 'public/js/',
    filename: '[name].bundle.js',
    publicPath: '/public/js/'
  },

  devtool: 'inline-source-map',
  // devtool: '#source-map',

  resolve: {
    modulesDirectories: ['node_modules', 'src/js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      // mangle: false,
      // compress: false,
      // output: {
      //   beautify: true
      // },
      mangle: {
        except: ['$', 'require']
      },
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = webpackConf;
