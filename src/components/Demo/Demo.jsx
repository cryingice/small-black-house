/*
 * @Author: duanlinlin 
 * @Date: 2018-12-07 18:13:02 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2018-12-08 20:44:52
 */
import React, {
  Component
} from 'react'
import SubComponent from './SubComponent';
import './demo.scss';
import {
  createStore
} from 'redux'
import todoApp from './Demo_Redux/reducer';
import { addTodo, toggleTodo, setVisibilityFilter } from './Demo_Redux/actions';


let store = createStore(todoApp)
const unsubscribe = store.subscribe(() => console.log(store.getState()))
console.log(addTodo('add new one'));

store.dispatch(addTodo('add new one'));

console.log(store.getState());

export default class Demo extends Component {
  componentWillReceiveProps() {
    console.log('我是父组件的componentWillReceiveProps');
  }
  componentWillUpdate() {
    console.log('我是父组件的componentWillUpdate');
  }
  componentWillMount() {
    console.log('我是父组件的componentWillMount');
  }
  componentDidMount() {
    console.log('我是父组件的componentDidMount');
  }
  constructor(props) {
    super(props); //后才能用this获取实例化对象
    this.state = {
      fatherClass: 'red'
    }
  }
  handleClick = () => {
    this.setState({
      fatherClass: 'blue'
    })
  }
  render() {
    return (<div className={
      this.state.fatherClass
    } >
      <SubComponent />
      <button onClick={
        () => this.handleClick()
      } > </button> </div>
      )
    }
};