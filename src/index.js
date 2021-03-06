import dva from 'dva';
import browserHistory from 'history/createBrowserHistory';
import router from './router';
import { message } from 'antd';
import {conf_liberty} from '@pkg';

// 根路径
const { root } = conf_liberty;

// 1. Initialize
const app = dva({
  history: browserHistory(),
  onError(e) {// 报错提示
    message.error(e.message);
  },
});

// 2. Plugins
// app.use({});

// 3. Model 
// app.model(login);

// 4. Router
app.router(({ history, app }) => router({ history, app, root }));

// 5. Start
app.start('#root');