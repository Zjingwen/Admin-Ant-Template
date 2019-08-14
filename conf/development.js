const alias = require('./alias');
const PATH = require('../package.json').conf_liberty['path'];
const URL = require('../package.json').conf_liberty['url'];

module.exports = {
  "entry": "src/index.js",
  "publicPath":"/",
  "define":{
    "process.env.NODE_ENV": "development"
  },
  "extraBabelPlugins": [
    "dva-hmr",
    [
      "import",
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css"
      }
    ]
  ],
  "html": {
    "filename": "index.html",
    "template": "./index.ejs",
    "hash": true,
    "xhtml": true
  },
  "proxy":{
    "/api":{
      "target": URL[PATH],
      "changeOrigin": true,
      "pathRewrite": {"^/api": ""},
    },
  },
  "alias": alias,
};
