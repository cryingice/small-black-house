/*
 * @Author: duanlinlin 
 * @Date: 2019-01-23 15:41:30 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2019-01-29 11:42:18
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Icon } from 'antd';

import './scss/Mheader.scss';
import avatar from 'Assets/icon.jpeg';
import axios from 'axios'  

// const SubMenu = Menu.SubMenu;

/**
 * common header
 * @class Mheader
 * @extends {Component}
 */
export default class Mheader extends Component {
  static propTypes = {
    navStatus: PropTypes.bool.isRequired,
    turnOff: PropTypes.func.isRequired,
    turnOn: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    // this.state = {
    //   usr:'大吉大利,晚上吃鸡'
    // }
  }
  componentWillMount(){
    axios.get('/api/data')
      .then((res)=>{
        console.log(res,'resssss');
        res.status === 200 && this.props.getUserName(res.data.user)
        // this.setState({usr:res.data.user})
      })
  }
  render() {
    return (
      <div className="header">
        <Icon
          className="trigger"
          type={this.props.iconsName}
          onClick={this.props.toggleStatus}
        />
        <span className="user-info">
          <img src={avatar}></img>
          {/*<Icon type="user" />*/}
          <span className="user-info-name">
           {/* {'' + this.props.navStatus}*/} 
           {this.props.user}
        </span>
        </span>
      </div>
    )
  }
}
