const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const alias = require('./conf/alias');

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'http://localhost:9000/',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    })
  ],
  resolve: {
    alias: alias,
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 9000,
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};
