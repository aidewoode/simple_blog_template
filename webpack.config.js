var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var cssnano = require('cssnano');

module.exports = {
  entry: './app/main.js',
  output: {
    path: './app',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.css$/,
        loader:ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
      },

      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.(woff|ttf)$/, loader: 'url-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },

  vue: {
    loaders: {
      css: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
    }
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.UglifyJsPlugin()
  ],

  postcss: function() {
    return [autoprefixer, precss, cssnano];
  },

  remarkable: {
    preset: 'full',
    linkify: true,
    typographer: true
  }
}
