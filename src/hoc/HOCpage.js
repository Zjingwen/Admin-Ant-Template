import React, { Component } from 'react';
import { isEqual } from 'underscore';
import { queryToJson, jsonToQuery } from '@utils/assist';
import Framing from '@components/Framing';
import routerMap from '../pages/index';
import { conf_liberty } from '@pkg';

const { root } = conf_liberty;
/**
 * page的高阶组件
 * @param {component} WrappedComponent 需要包裹的页面
 */
export default function index(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      const query = props.history && queryToJson(props.history.location.search);
      this.state = {
        query: query,
      };

      this.storeRef = this.storeRef.bind(this);
    };

    static getDerivedStateFromProps(props, state) {
      const query = props.history && queryToJson(props.history.location.search);
      return isEqual(query, state.query) ? null : { query: query };
    }

    componentDidMount() {
      this.ref.handleFrom && this.ref.handleFrom();
    };

    componentDidUpdate(prevProps, prevState) {
      if (!isEqual(prevState, this.state)) {
        this.setState({
          ...this.state,
        });
        this.ref.handleFrom && this.ref.handleFrom();
      }
    };

    storeRef(ref) {
      this.ref = ref;
    };

    hocHistory(query) {
      const { pathname } = this.props.history.location;
      this.props.history.push(`${pathname}?${jsonToQuery(query)}`);
    }

    handleOut() {
      localStorage.removeItem('userInfo');
    };

    render() {
      // 混入方法
      const mixin = {
        hocHistory: (q) => this.hocHistory(q),
      };

      let userName = '';
      if (localStorage.getItem('userInfo')) {
        userName = JSON.parse(localStorage.getItem('userInfo')).name;
      } else {
        this.handleOut();
      }

      const headerMenus = <div>
        <span onClick={() => this.handleOut()}>退出登陆</span>
        <span onClick={() => { }}></span>
      </div>;

      const style = {
        background: '#FFF',
        padding: '20px',
      };

      return (
        <Framing
          name={userName}
          headerMenus={headerMenus}
          routerMap={routerMap}
          root={root}
        >
          <div style={style}>
            <WrappedComponent
              {...mixin}
              {...this.props}
              {...this.state}
              ref={this.storeRef}
            />
          </div>
        </Framing>
      );
    };
  };
};