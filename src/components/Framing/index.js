import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import Sider from './sider';
import Header from './header';
import Footer from './Footer';
import Content from './Content';

/**
 * Framing组件用来组合header、menus、footer
 * @param {object} props
 * @param {string} props.name 用户名
 * @param {array} props.routerMap 导航的数据
 * @param {func} props.emitShow 每次显示调用
 * @param {string} props.footerContent 底部信息
 * @param {node} props.children React.children
 * @param {string} props.root 是否有顶级路径
 */
function Framing(props){
  const [collapsed, handleCollapsed] = useState(false);
  const STYLE = {
    minHeight: '100vh'
  };
  let style_layout = {
    marginLeft: collapsed ? 80 : 200,
  };

  return (
    <Layout style={STYLE}>
      <Sider 
        collapsed={collapsed}
        routerMap={props.routerMap}
        root={props.root}
      />
      <Layout style={style_layout}>
        <Header 
          name={props.name}
          menus={props.headerMenus}
          collapsed={collapsed} 
          emitCollapsed={()=>handleCollapsed(!collapsed)}
        >
        </Header>
        <Content>{props.children}</Content>
        <Footer context={props.footerContent} />
      </Layout> 
    </Layout>
  );
};

Framing.propTypes = { 
  name: PropTypes.string,
  root: PropTypes.string,
  routerMap: PropTypes.array,
  footerContent: PropTypes.string,
  children: PropTypes.node,
  emitShow: PropTypes.func,
};
Framing.defaultProps = { 
  name: '',
  root: '',
  routerMap: [],
  footerContent: '',
  children: '',
  emitShow:()=>{},
};

export default Framing;