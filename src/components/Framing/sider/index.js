import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'dva/router';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

function jsonToQuery(str) {
  let _str = '';

  for (let o in str) {
    if (str[o] !== -1) {
      _str += o + '=' + str[o] + '&';
    }
  }
  _str = _str.substring(0, _str.length - 1);
  return _str;
};

/**
 * 判断路径返回对应的key和openKeys
 * @returns {object} obj
 * @param {string} obj.openKeys 上级目录
 * @param {string} obj.key 子目录
 */
function getMenuPath(root) {
  let PATH_NAME_ARRAY = window.location.pathname.split('/');
  PATH_NAME_ARRAY.shift();
  let conf = {
    key: '',
    openKeys: '',
  };
  conf.openKeys = root ?
    `/${PATH_NAME_ARRAY[0]}/${PATH_NAME_ARRAY[1]}` :
    `/${PATH_NAME_ARRAY[0]}`;
  conf.key = `/${PATH_NAME_ARRAY.join('/')}`;
  return conf;
};

function hasIcon(v) {
  return v || "bulb";
};

function subMenuChildrens({ next, path }) {
  const m = routerSelect(next);

  return m.map((value) => {
    const QUERY = value.hasOwnProperty('query') ?
      jsonToQuery(value.query) :
      '';
    const LIST_PATH = path + value.path;

    return LinkComponent(LIST_PATH, QUERY, value.iconType, value.breadcrumbName);
  });
};

function LinkComponent(pathName, search, iconType, name) {
  const icon = iconType || "bulb";
  return (
    <Menu.Item key={pathName}>
      <Link to={{
        pathname: pathName,
        search: search
      }}>
        <Icon type={icon} />
        <span>{name}</span>
      </Link>
    </Menu.Item>
  );
};

function menuItems(m, root = '') {
  return m.map((value) => {
    const PATH = root ? `${root}${value.path}` : value.path;
    const QUERY = value.hasOwnProperty('query') ?
      jsonToQuery(value.query) :
      '';
    const iconType = hasIcon(value.iconType);

    if (value.hasOwnProperty('next')) {
      return (<SubMenu key={PATH} title={<div><Icon type={iconType} /><span>{value.breadcrumbName}</span></div>}>
        {subMenuChildrens({
          next: value.next,
          path: root ? `${root}${value.path}` : value.path,
        })}
      </SubMenu>);
    };
    return LinkComponent(PATH, QUERY, value.iconType, value.breadcrumbName);
  });
};

function routerSelect(m) {
  return m.filter((v) => {
    if (v.hasOwnProperty('menu')) return v.menu ? true : false;
    return true;
  });
};

export default (props) => {
  let { routerMap, root } = props;
  let conf = getMenuPath(root);
  let key = [conf.key];
  let openKeys = [conf.openKeys];
  let menus = menuItems(routerSelect(routerMap), root);

  const STYLE = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    left: 0,
  };

  return (
    <Sider
      style={STYLE}
      trigger={null}
      collapsible
      collapsed={props.collapsed}
    >
      <Menu
        theme="dark"
        mode="inline"
        defaultOpenKeys={openKeys} // 上级目录
        selectedKeys={key} // 子级目录
      >
        {menus}
      </Menu>
    </Sider>
  );
};