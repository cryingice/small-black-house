/*
 * @Author: duanlinlin 
 * @Date: 2018-12-13 16:25:02 
 * @Last Modified by:   duanlinlin 
 * @Last Modified time: 2018-12-13 16:25:02 
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import { Layout} from 'antd';

import '../index.scss';
import config from 'Libs/config';
import routeConfig from 'Libs/routeConfig';
import Mmenus from 'Components/common/Mmenus';
import MheaderContainer from 'Components/common/containers/MheaderContainer';
import {StateToPropsCommonMethod} from 'Libs/mutils';
import { toggleNavStatus } from 'Redux/action/index';

const { Content, Footer, Sider } = Layout;
const {getNavStatus} = StateToPropsCommonMethod;


class Dealing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  innerOnCollapse = (collapsed) => {
    console.log(collapsed,'状态');
    this.props.onCollapse();    //想redux传递action
  }
  render() {
    return (
      <Layout>
        <Sider
          collapsible
          collapsed={!this.props.navStatus}
          onCollapse={this.innerOnCollapse}
        >
          <div className="logo" >
            <img className="logo-img" src={config.logoSrc} alt=""/>
            <span className="logo-text">{config.logoText}</span>
          </div>
          <Mmenus />
        </Sider>
        <Layout>
          <MheaderContainer />
          <Content>
            <Route path={`${this.props.match.url}`} component={routeConfig[this.props.match.url]} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
        </Footer>
        </Layout>
      </Layout>
    )
  }
}
const mapStateToProps = (state) => ({
  navStatus:getNavStatus(state)
})

const mapDispatchToProps = dispatch =>({
  onCollapse :()=>dispatch(toggleNavStatus())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dealing)
