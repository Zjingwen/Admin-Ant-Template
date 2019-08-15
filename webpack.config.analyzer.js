const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const pro = require('./webpack.config.pro');

pro['plugins'].push(new BundleAnalyzerPlugin());

module.exports = pro;
