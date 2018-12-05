import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import config from '../libs/config';
import Mmenus from '../components/common/Mmenus';

import '../index.scss';

const { Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;


export default class Dealing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    console.log(this.props);

    return (
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" >
            <img className="logo-img" src={config.logoSrc} alt=""/>
            <span className="logo-text">{config.logoText}</span>
          </div>
          <Mmenus />
        </Sider>
        <Layout>
          <Content style={{ padding: '0 50px' }}>
            <Route path={`${this.props.match.url}`} component={config.route[this.props.match.url]} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
        </Footer>
        </Layout>
      </Layout>
    )
  }
}
