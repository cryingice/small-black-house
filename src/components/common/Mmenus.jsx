import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Menu, Icon } from 'antd';

import config from '../../libs/config';
const SubMenu = Menu.SubMenu;
const MmenusMsg = config.Mmenus;

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
  onOpenChange = (openKey) => {
    console.log(openKey);
  }
  //具有子tab
  getComplexTab = (tab) => {
    return (
      <SubMenu
        key={tab.key}
        title={<span><Icon type={tab.type} /><span>{tab.text}</span></span>}
      >
        {tab.sub.map(subTab => {
          return (
            <Menu.Item key={subTab.key}>
              <Link to={subTab.link}>
                <Icon type={subTab.type} />
                <span>{subTab.text}</span>
              </Link>
            </Menu.Item>
          )
        })}
      </SubMenu>
    )
  }
  //无子tab
  getSingleTab = (tab) => {
    return (
      <Menu.Item key={tab.key}>
        <Link to={tab.link}>
          <Icon type={tab.type} />
          <span>{tab.text}</span>
        </Link>
      </Menu.Item>
    )
  }
  render() {
    const target = window.location.pathname.split('/').pop() || window.location.hash.split('/').pop().split('?')[0] || 'home';  //链接定位
    const selectKey = [`${target}`];
    const cps = MmenusMsg.map(tab => {
      let cp = null;
      cp = tab.sub ? this.getComplexTab(tab) : this.getSingleTab(tab);
      return cp;
    })
    return (
      <Menu theme="dark" mode="inline" onOpenChange={this.onOpenChange} defaultSelectedKeys={selectKey}>
        {cps}
      </Menu>
    )
  }
}
