var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/app/src/app');
var APP_DIR = path.resolve(__dirname, 'src/app/');

var config = {
  entry: APP_DIR + '/src/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  module : {
    loaders : [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.html$/, loader: "raw-loader" },
      { test: /\.js$/, include : APP_DIR, loader : 'babel-loader', exclude: /node_modules/ }
    ]
  }
};

module.exports = config;