const path = require('path');
const webpack = require('webpack');

const config = {
  cache: true,
  devtool: 'source-map',
  entry: './spec.entry.ts',

  output: {
    path: __dirname,
    filename: 'specs.js',
    sourceMapFileName: 'specs.map'
  },

  module: {
    loaders: [
      {
        test: /\.ts$/, loader: 'awesome-typescript-loader'
      },
      {
        test: /\.json$/, loader: 'json-loader'
      },
      {
        test: /\.html$/, loader: 'raw-loader'
      },
      {
        test: /\.css$/, loader: 'to-string-loader!css-loader'
      }
    ]
  },


  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  },

  node: {
    global: true,
    process: true,
    Buffer: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false,
    clearTimeout: true,
    setTimeout: true
  }
};

module.exports = config;