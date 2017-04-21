var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

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
},
 plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            minify: {
                collapseWhiteSpace: true
            }
        })
    ]

}