/**
 * @todo 优化 menu的item支持多个并且callback多个参数
 */
import React from 'react';
import { Layout, Menu, Icon, Dropdown, Col, Row} from 'antd';
import { conf_liberty } from '@pkg';
import {storageGet, storageRemove} from '@utils/assist';

const { Header } = Layout;
const MenuItem = Menu.Item;
const PKG_CONF_ROOT = conf_liberty.root;

function FromeHeader(props){
  const NAME = storageGet('userInfo').name;
  const STYLE_HEADER = {
    background: '#fff',
  };
  const STYLE_MENU = {
    textAlign: 'right',
  };
  const STYLE_TRIGGER = {
    fontSize: '18px',
    lineHeight: '64px',
    padding: '0 24px',
    cursor: 'pointer',
    transition: 'color .3s',
  };
  const MENU = (
    <Menu onClick={()=>outSign()}>
      <MenuItem>
        <span>退出登陆</span>
      </MenuItem>
    </Menu>
  );
  const TYPE = props.collapsed ?
    'menu-unfold' :
    'menu-fold';

  function outSign(){
    const path = PKG_CONF_ROOT ? 
      PKG_CONF_ROOT + '/user/sign':
      '/user/sign';
    storageRemove('userInfo');
    window.location.href = path;
  };

  

  return (
    <Header style={STYLE_HEADER}>
      <Row>
        <Col span={12}>
          <Icon
            style={STYLE_TRIGGER}
            type={TYPE}
            onClick={()=>props.updateStateProp()}
          />
        </Col>
        <Col span={12} style={STYLE_MENU}>
          <Dropdown overlay={MENU}>
            <span>{NAME}</span>
          </Dropdown>
        </Col>
      </Row>
    </Header>
  );
};

export default FromeHeader;