import loadable from '@utils/loadable';

export default {
  path: '/coustomer',
  component: loadable(import ('./index')),
  breadcrumbName: '充值管理',
  iconType: 'pay-circle',
  query: {
    id: '',
    page: '',
  },
};
