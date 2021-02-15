import React from 'react';
import { connect } from 'dva';

class MinePage extends React.Component{
  goIndex = () => {
    this.props.history.push('/')
  }
  render(){
    return(
      <div>
        <h1>这是我的页面</h1>
        <button onClick={this.goIndex}>去首页</button>
      </div>
    )
  }
}


export default connect()(MinePage)
