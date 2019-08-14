/**
 * development 开发环境配置
 * production 正式环境配置
 */
const development = require('./conf/development');
const production = require('./conf/production');

export default {
  "env": {
    "development": development,
    "production": production,
  }
};
