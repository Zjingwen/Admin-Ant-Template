const alias = require('./conf/alias');
const rules = require('./conf/rules');
let plugins = require('./conf/plugins');

const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

plugins.push(new CleanWebpackPlugin());
plugins.push(new MiniCssExtractPlugin({
  filename: '[name].css',
  chunkFilename: '[name].[chunkhash:6].css',
  ignoreOrder: true,
}));

plugins.push(new DllReferencePlugin({
  context: __dirname,
  manifest: require('./static/react.manifest.json')
}));
plugins.push(new DllReferencePlugin({
  context: __dirname,
  manifest: require('./static/axios.manifest.json')
}));
plugins.push(new DllReferencePlugin({
  context: __dirname,
  manifest: require('./static/dva.manifest.json')
}));
plugins.push(new UglifyJsPlugin({
  parallel: true,
  uglifyOptions: ({
    mangle: false,
    output: {
      beautify: true,
    },
  })
}));

rules[1] = {
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader'],
};

module.exports = {
  mode: 'production',
  stats: 'minimal',
  performance: {
    hints: "warning",
    maxEntrypointSize: 5000000,
    maxAssetSize: 3000000
  },
  entry: {
    index: ['babel-polyfill', './src/index.js'],
  },
  output: {
    filename: 'index.[chunkhash:6].js',
    publicPath: '/',
    chunkFilename: '[name].bundle.js',
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      chunks: 'all',
    }
  },
  devtool: 'none',
  plugins: plugins,
  resolve: {
    alias: alias,
  },
  module: {
    rules: rules,
  }
};