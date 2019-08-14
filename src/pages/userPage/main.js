import signModel from './sign/model';
import loadable from '@utils/loadable';

export default {
  path: '/user',
  menu: false,
  next:[
    {
      path: '/sign',
      component: loadable(import ('./sign')),
      model: signModel,
    }
  ]
};
