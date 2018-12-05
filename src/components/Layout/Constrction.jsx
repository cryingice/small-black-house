import React, { Component } from 'react';
import { Link } from "react-router";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const {Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class Constrction extends Component {
  constructor(props){
    super(props);
    this.state={}
  }

  render(){
    return(
      <Layout>
            <Header className="header">
              我是头部
            </Header>
            <Content style={{ padding: '0 50px' }}>
              {this.props.children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
      </Layout>
    )
  }
};


