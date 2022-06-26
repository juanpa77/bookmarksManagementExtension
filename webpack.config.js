const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/popup.js',
  output: {
    filename: 'popup.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
}