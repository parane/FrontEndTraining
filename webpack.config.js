var path = require('path');


module.exports = {
  entry: './src/entry.js',
  output: {
        path: path.resolve(__dirname, './dist'),
        filename: "bundle.js",
  },
  devServer: {
  contentBase: path.join(__dirname, './dist'),
  compress: true,
  port: 9000
  }
}