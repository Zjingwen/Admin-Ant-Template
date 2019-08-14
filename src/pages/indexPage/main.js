/**
 * @todo 优化 rotuer中的path选项支持String或者Array，可以支持多个路由跳转一个页面
 */
import loadable from '@utils/loadable';

export default {
  path: '/',
  component: loadable(import('./index')),
  menu: false
};
