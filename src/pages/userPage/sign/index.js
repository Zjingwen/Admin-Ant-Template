import React, { useEffect } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button } from 'antd';
import '@lib/particles';
const FormItem = Form.Item;

function Login(props) {
  const STYLE_LOGIN_FORM = {
    position: 'fixed',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    minWidth: '350px',
  };
  const STYLE = {
    height: '100vh',
    background: '#eee',
  };
  const { getFieldDecorator } = props.form;
  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.dispatch({
          type: 'userSign/fromPost',
          payload: { ...values },
        });
        return;
      }
    });
  };
 
  useEffect(() => {
    particlesJS("particles", {
      "particles": {
        "number": {
          "value": 10,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#000000"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#000000",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }, []);

  return (
    <div style={STYLE} id='particles'>
      <Form onSubmit={handleSubmit} style={STYLE_LOGIN_FORM}>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{
              required: true,
              message: '请输入账号'
            }]
          })(<Input prefix={<Icon type="user" />} type="text" placeholder="账号" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('passWord', {
            rules: [{
              required: true,
              message: '请输入密码'
            }]
          })(<Input prefix={<Icon type="lock" />} type="password" placeholder="密码" />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">登录</Button>
        </FormItem>
      </Form>
    </div>
  );
};

const IndexPage = Form.create()(Login);

export default connect()(IndexPage);
