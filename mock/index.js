//index.js
const delay = require("webpack-api-mocker/utils/delay");
const mock = require("./mock.js");

const proxy = {
  ...mock
};
module.exports = delay(proxy, 1000);