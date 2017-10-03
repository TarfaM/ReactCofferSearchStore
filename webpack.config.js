// var webpack = require('webpack');
// var path = require('path');
//
// var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
// var APP_DIR = path.resolve(__dirname, 'src/client/app');
//
// var config = {
//   entry: APP_DIR + '/index.jsx',
//   output: {
//     path: BUILD_DIR,
//     filename: 'bundle.js'
//   }
// };

// module.exports = config;
// module.exports = {
//
//   entry: APP_DIR + '/app/index.jsx',
//   module:{
//
//
//   }
//
// };

var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /src\/.+.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};
