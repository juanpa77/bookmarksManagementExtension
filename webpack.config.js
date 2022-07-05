const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    popup: './src/popup.js',
    background: './src/background.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      }
    ]
  }
}