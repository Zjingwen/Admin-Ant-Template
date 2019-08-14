import loadable from '@utils/loadable';

export default {
  path: '/activity',
  breadcrumbName: '活动管理',
  iconType: 'bulb',
  next:[
    {
      path: '/index',
      component: loadable(import('./index')),
      breadcrumbName: '已上线',
      iconType: 'bulb',
      query: {
        id: '',
        page: '',
      },
    },
    {
      path: '/end',
      component: loadable(import('./end')),
      breadcrumbName: '已结束',
      iconType: 'bulb',
      query: {
        id: '',
        page: '',
      },
    },
  ],
};
