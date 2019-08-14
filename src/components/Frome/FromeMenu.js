/**
 * @todo 优化 改为函数组件
 * @todo 优化 linkPath的做法太过耦合
 */
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';

import routerMap from '@pages';
import { jsonToQuery } from '@utils/assist';
import { conf_liberty } from '@pkg';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const PAK_CONF_ROOT = conf_liberty.root;

/**
 * 判断路径返回对应的key和openKeys
 * @returns {object} obj
 * @param {string} obj.openKeys 上级目录
 * @param {string} obj.key 子目录
 */
function getMenuPath(){
  /**
   * @todo 优化 改为引入router.js
   * @todo 优化 判断改为配置
   */
  const PATH_NAME_ARRAY = window.location.pathname.split('/');
  let conf = {
    key: '',
    openKeys: '',
  };
  if(PAK_CONF_ROOT){
    conf.openKeys = `/${PATH_NAME_ARRAY[1]}/${PATH_NAME_ARRAY[2]}`;
    if(PATH_NAME_ARRAY[3]){
      conf.key = `/${PATH_NAME_ARRAY[1]}/${PATH_NAME_ARRAY[2]}/${PATH_NAME_ARRAY[3]}`;
    }else{
      conf.key = `/${PATH_NAME_ARRAY[1]}/${PATH_NAME_ARRAY[2]}`;
    }

  }else{
    conf.openKeys = `/${PATH_NAME_ARRAY[1]}`;
    if(PATH_NAME_ARRAY[2]){
      conf.key = `/${PATH_NAME_ARRAY[1]}/${PATH_NAME_ARRAY[2]}`;
    }else{
      conf.key = `/${PATH_NAME_ARRAY[1]}`;
    }
  }
  return conf;
};

class FromeMenu extends React.Component {
  constructor(props) {
    super(props);
    const conf = getMenuPath();
    this.state = {
      key: [conf.key],
      openKeys: [conf.openKeys],
    };
  }

  subMenuChildrens({next, path}){
    return next.map((value)=>{
      const QUERY = value.hasOwnProperty('query') ?
        jsonToQuery(value.query) :
        '';
      let linkPath = path + value.path;

      if(PAK_CONF_ROOT) linkPath = PAK_CONF_ROOT + linkPath;

      return (<Menu.Item key={linkPath}>
        <Link to={{
          pathname: linkPath,
          search: `?${QUERY}`
        }}>
          <Icon type={value.iconType} />{value.breadcrumbName}
        </Link>
      </Menu.Item>);
    });
  };

  render() {
    const ROUTER_SELECT = routerMap.filter((v) => {
      if(v.hasOwnProperty('menu')) return v.menu ? true : false;
      return true;
    });

    const MENU_ITEMS = ROUTER_SELECT.map((value) => {
      const PATH = PAK_CONF_ROOT ?
        PAK_CONF_ROOT + value.path:
        value.path;

      const QUERY = value.hasOwnProperty('query') ?
        jsonToQuery(value.query) :
        '';

      if(value.hasOwnProperty('next')){

        return(<SubMenu key={PATH} title={<><Icon type={value.iconType} /><span>{value.breadcrumbName}</span></>}>
          {this.subMenuChildrens({
            next: value.next,
            path: value.path,
          })}
        </SubMenu>);
      };

      return (<Menu.Item key={PATH}>
        <Link to={{
          pathname: PATH,
          search: QUERY,
        }}>
          <Icon type={value.iconType} /><span>{value.breadcrumbName}</span>
        </Link>
      </Menu.Item>);
    });

    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultOpenKeys={this.state.openKeys} // 上级目录
          defaultSelectedKeys={this.state.key} // 子级目录
        >
          {MENU_ITEMS}
        </Menu>
      </Sider>
    );
  };
};

export default FromeMenu;
