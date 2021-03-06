/*
 * @Author: duanlinlin 
 * @Date: 2019-01-23 15:40:29 
 * @Last Modified by:   duanlinlin 
 * @Last Modified time: 2019-01-23 15:40:29 
 */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

import '../index.scss';
import config from 'Libs/config';
import routeConfig from 'Libs/routeConfig';
//the component of navigations
import Mmenus from 'Components/common/Mmenus';
//the header includs avatar and other user'infos 
import MheaderContainer from 'Components/common/containers/MheaderContainer';
import MbreadCrumb from 'Components/common/MbreadCrumb'; 
import { StateToPropsCommonMethod } from 'Libs/mutils';
import { toggleNavStatus } from 'Redux/action/index';

const { Content, Footer, Sider } = Layout;
const { getNavStatus } = StateToPropsCommonMethod;


/**
 * @description the component to process some routes that have common document structure except demo or login
 * @class Dealing
 * @extends {Component}
 */
class Dealing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  innerOnCollapse = (collapsed) => {
    this.props.onCollapse();    //pass action to redux
  }
  render() {
    return (

      <Layout className="page">
        <Sider
          collapsible
          collapsed={!this.props.navStatus}
          onCollapse={this.innerOnCollapse}
          className="nav"
        >
          <div className="logo" >
            <img className="logo-img" src={config.logo} alt="" />
            <span className="logo-text">{config.logoText}</span>
          </div>
          <Mmenus mPathname={this.props.location.pathname} />
        </Sider>
        <Layout className="page-content">
          <MheaderContainer />
          <MbreadCrumb location={this.props.location.pathname}></MbreadCrumb>
          <Content className="main">
            <Route path={`${this.props.location.pathname}`} component={routeConfig[this.props.location.pathname]} />
          </Content>
          <Footer style={{ textAlign: 'center', flex: 'none' }}>
            {config.footText}
          </Footer>
        </Layout>
      </Layout>

    )
  }
}
const mapStateToProps = (state) => ({
  navStatus: getNavStatus(state)
})

const mapDispatchToProps = dispatch => ({
  onCollapse: () => dispatch(toggleNavStatus())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dealing)
