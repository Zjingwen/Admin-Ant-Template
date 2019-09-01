const path = require('path');
const DllPlugin = require('webpack/lib/DllPlugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    react: ['react'],
    axios: ['axios'],
    dva: ['dva'],
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, 'static'),
    library: '_dll_[name]'
  },
  plugins: [
    new DllPlugin({
      name: '_dll_[name]',
      path: path.join(__dirname, 'static', '[name].manifest.json')
    }),
    new UglifyJsPlugin({
      parallel: true,
      uglifyOptions: ({
        mangle: false,
        output: {
          beautify: true,
        },
      })
    })
  ]
};