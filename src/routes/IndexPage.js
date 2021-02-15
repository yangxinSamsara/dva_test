import React from 'react';
import { connect } from 'dva';
import * as testApi from '../services/testApi'

class IndexPage extends React.Component {
  componentDidMount() {
    testApi.testMock().then(res => {
      console.log(res, 'res');
    })
  }
  goMine = () => {
    this.props.history.push('/mine')
  }
  countAdd = () => {
    this.props.dispatch({
      type: 'index/countAdd',
      payload: {
        num: 1
      }
    })
  }
  countAddSync = () => {
    this.props.dispatch({
      type: 'index/countAddSync',
      payload: {
        num: 2
      }
    })
  }
  getCondeData = () => {
    this.props.dispatch({
      type: 'index/getCnodeData'
    })
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>这是首页</h1>
        <p>这是models/index中的count===》{this.props.count}</p>
        <button onClick={this.goMine}>去我的页面</button>
        <button onClick={this.countAdd}>count+1</button>
        <button onClick={this.countAddSync}>count+2</button>
        <button onClick={this.getCondeData}>获取cnode接口数据</button>
        <ul>
          {this.props.topics.map(item => {
            return <li key={item.id}>{item.title}</li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.index.count,
    topics: state.index.topics
  }
}

export default connect(mapStateToProps)(IndexPage)
