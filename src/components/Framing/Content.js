import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

export default (props) => {
  const STYLE_CONTENT = {
    padding: '10px',
    overflow: 'initial',
  };

  return <Content style={STYLE_CONTENT} >{props.children}</Content>;
};
