import React from 'react';
import { Modal } from 'antd';

class ModalFrome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: props.children,
      title: props.title,
      visible: props.visible,
      width: props.width,
      top: props.top || 100
    };
  };

  componentDidUpdate(nextProps) {
    this.setState({
      visible: nextProps.visible
    });
  }

  hanldeOk () {
    this.props.onOk('ok');
    this.setState({
      visible: false
    });
  };

  hanldeCancel () {
    this.props.onCancel('cancel');
    this.setState({
      visible: false
    });
  };

  render() {
    const { children, title, visible, top, width } = this.state;
    return (
      <Modal
        style={{ top: top }}
        visible={visible}
        title={title}
        onOk={this.hanldeOk}
        onCancel={this.hanldeCancel}
        okText="确认"
        cancelText="取消"
        width={width}
        destroyOnClose={true}
        bodyStyle={{ maxHeight: 500, overflowY: 'scroll' }}
      >
        {children}
      </Modal>
    );
  };
}

export default ModalFrome;
