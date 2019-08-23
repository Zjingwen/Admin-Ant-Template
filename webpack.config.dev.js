const path = require('path');
const alias = require('./conf/alias');
const rules = require('./conf/rules');
const plugins =  require('./conf/plugins');
const apiMocker = require("webpack-api-mocker");
const pkg = require('./package.json');
const root = pkg.conf_liberty.root.split('/')[1];

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'index.js',
    publicPath: 'http://localhost:9000/',
  },
  devtool: 'eval-source-map',
  plugins: plugins,
  resolve: {
    alias: alias,
  },
  devServer: {
    openPage: root,
    historyApiFallback: true,
    compress: true,
    port: 9000,
    overlay: true,
    stats: 'minimal',
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
      },
    },
    before(app) {
      apiMocker(app, path.resolve("./mock/index"));
    }
  },
  module: {
    rules: rules,
  }
};
