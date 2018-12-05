import React, {
  Component
} from 'react'
import SubComponent from './SubComponent';
import './demo.scss';

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
    this.state={fatherClass:'red'}
  }
  handleClick = () => {
    this.setState({fatherClass:'blue'})
  }
  render() {
    return ( 
     <div className={this.state.fatherClass}>
        <
          SubComponent / >
          <button onClick={()=> this.handleClick()}></button>
     </div>
    )
  }
};