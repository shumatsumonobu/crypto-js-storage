const path = require('path');

module.exports = {
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1500,
    ignored: [
      path.resolve(__dirname, 'node_modules')
    ]
  },
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 5242880
  }
}