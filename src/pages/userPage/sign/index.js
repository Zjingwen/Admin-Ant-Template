import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Row, Col } from 'antd';

const FormItem = Form.Item;

class Login extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({
          type: 'userSign/fromPost',
          payload:{...values},
        });
        return;
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const STYLE_LOGIN_FORM = {
      position: 'fixed',
      top: '35%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      minWidth: '450px',  
      background: '#fff', 
      padding: '40px 40px 16px',  
      borderRadius: '5px',
    };
    const LOGIN_FROM_BUTTON = {
      width: '100%',
    };

    return (
      <Form onSubmit={this.handleSubmit} style={STYLE_LOGIN_FORM}>
        <p style={{ textAlign: "center" }}>管理台</p>
        <FormItem>
          <Row style={{ height: 45 }}>
            <Col>
              {getFieldDecorator('userName', {
                rules: [{
                  required: true,
                  message: '请输入账号'
                }]
              })(<Input prefix={<Icon type="user" />} size="large" type="text" placeholder="账号" />)}
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row style={{ height: 45 }}>
            <Col>
              {getFieldDecorator('passWord', {
                rules: [{
                  required: true,
                  message: '请输入密码'
                }]
              })(<Input prefix={<Icon type="lock" />} size="large" type="password" placeholder="密码" />)}
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Button size="large" type="primary" htmlType="submit" style={LOGIN_FROM_BUTTON}>登录</Button>
        </FormItem>
      </Form>
    );
  }
}

const IndexPage = Form.create()(Login);

export default connect()(IndexPage);
