import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

/**
 * 公共菜单
 * 
 * @export
 * @class Mmenus
 * @extends Component
 */
export default class Mmenus extends Component {
  // static propTypes = {
    
  // }
  constructor(props) {
    super(props);
    this.state = {
      openKeys: ['charts']
    }
  }
  onOpenChange = (openKey)=>{
    console.log(openKey);
  }
  render() {
    const target = window.location.pathname.split('/').pop() || window.location.hash.split('/').pop().split('?')[0] || 'home';  //链接定位
    const selectKey = [`${target}`];
    
    return (
      <Menu theme="dark"  mode="inline" onOpenChange={this.onOpenChange} defaultSelectedKeys={selectKey}>
        <Menu.Item key="home">
          <Icon type="smile" />
          <span>首页</span>
        </Menu.Item>
        <Menu.Item key="introduction">
          <Icon type="laptop" />
          <span>快速入门</span>
        </Menu.Item>
        <SubMenu
          key="charts"
          title={<span><Icon type="bar-chart" /><span>百度图表</span></span>}
        >
          <Menu.Item key="line">
            <Icon type="line-chart" />
            <span>折线图</span>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={<span><Icon type="setting" /><span>基础组件</span></span>}
        >
          <Menu.Item key="button">
            <Icon type="editor" />
            <span>按钮</span>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="userManager">
          <Icon type="nav-text" />
          <span>用户管理</span>
        </Menu.Item>
        <Menu.Item key="adver">
          <Icon type="notification" />
          <span className="nav-text">广告管理</span>
        </Menu.Item>
      </Menu>
    )
  }
}
