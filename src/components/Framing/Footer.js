import React from 'react';
import { Layout } from 'antd';
const { Footer} = Layout;

export default (props)=>{
  const STYLE_FOOTER = {
    textAlign: 'center',
  };

  return <Footer style={STYLE_FOOTER}>
    {props.context}
  </Footer>;
};