import { Component } from 'react';
import { isEqual } from 'underscore';
import { authentication, queryToJson } from '@utils/assist';
import Frome from '@components/Frome';

/**
 * page的高阶组件
 * @param {component} WrappedComponent 需要包裹的页面
 */
export default function index(WrappedComponent){
  return class extends Component{
    constructor(props){
      super(props);
      authentication(this);
      const query = queryToJson(props.history.location.search);

      this.state = {
        query: query,
      };

      this.storeRef = this.storeRef.bind(this);
    };

    static getDerivedStateFromProps(props, state){
      let query = queryToJson(props.history.location.search);
      return isEqual(query, state.query) ? null : {query: query};
    }

    componentDidMount(){
      this.ref.handleFrom && this.ref.handleFrom();
    };

    componentDidUpdate(prevProps, prevState){
      if(!isEqual(prevState, this.state)){
        this.setState({
          ...this.state,
        });
        this.ref.handleFrom && this.ref.handleFrom();
      }
    };

    storeRef(ref){
      this.ref = ref;
    };

    render(){
      return(
        <Frome>
          <WrappedComponent
            {...this.props}
            {...this.state}
            ref = {this.storeRef}
          />
        </Frome>
      );
    };
  };
};
