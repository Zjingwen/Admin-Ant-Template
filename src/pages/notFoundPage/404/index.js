import React from 'react';
import { connect } from 'dva';
import HOCpage from '@hoc/HOCpage';
@HOCpage
class IndexPage extends React.Component {
  render(){
    return (
      <>你来到了一个神奇的404</>
    );
  };
}

export default connect()(IndexPage);
