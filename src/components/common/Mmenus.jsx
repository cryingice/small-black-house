import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Menu, Icon } from 'antd';

import config from '../../libs/config';
const SubMenu = Menu.SubMenu;
const MmenusMsg = config.Mmenus;

/**
 * common navigation
 * 
 * @export
 * @class Mmenus
 * @extends Component
 */
export default class Mmenus extends Component {
  constructor(props) {
    super(props);
  }
  onOpenChange = (openKey) => {
  }
  /**
   * get component of tab that have subTab
   * @param {Object} tab infos
   * @returns {Component}
   */
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
  /**
   * get component of tab that haven't subTab
   * @param {Object} tab infos
   * @returns {Component}
   */
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
    const target = this.props.mPathname.split('/').pop().split('?')[0] || ''; //tab of selected
    const openTarget = this.props.mPathname.split('/')[1] || '';  //tabs that show children
    const selectKey = [`${target}`];
    const cps = MmenusMsg.map(tab => {
      let cp = null;
      cp = tab.sub ? this.getComplexTab(tab) : this.getSingleTab(tab);
      return cp;
    })
    return (
      <Menu theme="dark" mode="inline" onOpenChange={this.onOpenChange} selectedKeys={selectKey} defaultSelectedKeys={selectKey} defaultOpenKeys={[`${openTarget}`]}>
        {cps}
      </Menu>
    )
  }
}
