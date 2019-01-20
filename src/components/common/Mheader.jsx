import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Icon } from 'antd';

import './scss/Mheader.scss';
import avatar from 'Assets/icon.jpeg';

// const SubMenu = Menu.SubMenu;

/**
 * 公共头部
 * 
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
    this.state = {
      // triggerName:'menu-fold'
    }
  }
  componentDidUpdate(){
    
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
            大吉大利,晚上吃鸡!!
        </span>
        </span>
      </div>
    )
  }
}
