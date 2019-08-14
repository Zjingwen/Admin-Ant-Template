import React from 'react';
import { Icon } from 'antd';

/**
 * 收起menu组件
 * @param {object} props
 * @param {funciton} props.emit 点击事件
 */
export default (props)=>{
  const TYPE = props.collapsed ?
    'menu-unfold' :
    'menu-fold';

  const STYLE = {
    fontSize: '18px',
    lineHeight: '64px',
    padding: '0 24px',
    cursor: 'pointer',
  };

  return <Icon
    style={STYLE}
    type={TYPE}
    onClick={()=>props.emit()}
  />;
};