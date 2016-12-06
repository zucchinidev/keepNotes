const path = require('path');
const webpack = require('webpack');

const config = {
  cache: true,
  devtool: 'source-map',
  entry: {
    vendor: './vendor',
    main: './client/main'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    sourceMapFileName: '[name].map',
    chunkFilename: '[id].chunk.js'
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

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'main'].reverse(), minChunks: Infinity
    })
  ],

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