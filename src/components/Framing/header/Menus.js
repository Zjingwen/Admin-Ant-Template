import React from 'react';
import { Menu, Dropdown } from 'antd';
const MenuItem = Menu.Item;

/**
 * 菜单
 * @param {*} props 
 */
export default (props) => {
  const { children } = props.menus.props;
  const menuItems = children.map((v, i) => {
    return <MenuItem key={i}>{v}</MenuItem>;
  });

  const MENU = (<Menu>
    {menuItems}
  </Menu>);
  return <Dropdown overlay={MENU}>
    <span>{props.name}</span>
  </Dropdown>;
};