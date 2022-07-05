const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/popup.js',
  output: {
    filename: 'popup.js',
    path: path.resolve(__dirname, 'dist')
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