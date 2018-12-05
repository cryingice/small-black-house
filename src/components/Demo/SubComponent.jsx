import React, { Component } from 'react'

export default class Demo extends Component {
  componentWillReceiveProps() {
    console.log('我是子组件的componentWillReceiveProps');
  }
  componentWillUpdate() {
    console.log('我是子组件的componentWillUpdate');
  }
  componentWillMount() {
    console.log('我是子组件的componentWillMount');
  }
  render() {
    console.log('我是子组件的render');
  }
  componentDidMount() {
    console.log('我是子组件的componentDidMount');
  }
  render(){
    return(
      <div className="tip">我是子组件</div>
    )
  }
};

