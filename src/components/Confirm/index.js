/**
 * conf = {
    title: string,
    content: string,
    okText: string,
    cancelText: string,
    okType: 'danger' || 'primary',
    onOk() {

    },
    onCancel() {

    },
 * }
 */

// import styles from './index.css';
import { Modal } from 'antd';

export default (conf) => {
  Modal.confirm({...conf});
};
