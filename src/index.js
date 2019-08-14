/**
 * @todo 优化 将PATH改为package中的conf_liberty
 */
import 'antd/node_modules/moment/locale/zh-cn';
import './index.css';

import dva from 'dva';
import browserHistory from 'history/createBrowserHistory';
import moment from 'antd/node_modules/moment';
import router from './router';
import {message} from 'antd';

moment.locale('zh-cn');
const PATH = '/admin'; // 设置根路径
// 1. Initialize
const app = dva({
  initialState: {
  },
  history: browserHistory(),
  onError(e){
    message.error(e.toString());
  },
});

// 2. Plugins
// app.use({});

// 3. Model 
// app.model();  

// 4. Router
app.router(({ history, app})=>router({history, app, PATH}));

// 5. Start
app.start('#root');