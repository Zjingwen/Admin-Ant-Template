import React from 'react';
import { Layout, Col, Row} from 'antd';
import Collect from './Collect.js';
import Menus from './Menus.js';

const { Header } = Layout;

export default (props)=>{
  const STYLE_HEADER = {
    background: '#fff',
  };
  const STYLE_COL = {
    textAlign: 'right',
  };
  const SPAN = 12;

  return (
    <Header style={STYLE_HEADER}>
      <Row>
        <Col span={SPAN}>
          <Collect
            collapsed={props.collapsed}
            emit={()=>props.emitCollapsed()}
          />
        </Col>
        <Col span={SPAN} style={STYLE_COL}>
          <Menus 
            name={props.name}
            menus={props.menus}
          />
        </Col>
      </Row>
    </Header>
  );
};
