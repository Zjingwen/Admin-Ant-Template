let alias = require('./alias');

module.exports = {
  "entry":"src/index.js",
  "publicPath":"/",
  "define":{
    "process.env.NODE_ENV": "production"
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
    "hash": false,
    "xhtml": true
  },
  "hash": true,
  "alias": alias,
};
