/**
 * 公共引入配置
 * @utils 公共方法
 * @pages 页面
 * @components 公共组建
 * @hoc 高阶组件
 * @pkg package.json配置
 */
let path = require('path');

module.exports = {
  '@utils': path.resolve('src/utils'),
  '@pages': path.resolve('src/pages'),
  '@components': path.resolve('src/components'),
  '@pkg': path.resolve('package.json'),
  '@hoc': path.resolve('src/hoc'),
  '@lib': path.resolve('src/lib'),
};
