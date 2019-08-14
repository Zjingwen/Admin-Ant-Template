import React from 'react';
import { Row, Col} from 'antd';

class Title extends React.Component {
  render() {
    return (
      <Row>
        <Col span={24}>
          <h3>{this.props.title}</h3>
        </Col>
      </Row>
    );
  }
};

export default Title;
