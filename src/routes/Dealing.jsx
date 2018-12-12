import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Layout} from 'antd';

import config from '../libs/config';
import Mmenus from 'Components/common/Mmenus';
import MheaderContainer from 'Components/common/containers/MheaderContainer';
import { connect } from 'react-redux'
import {StateToPropsCommonMethod} from 'Libs/mutils';
import { toggleNavStatus } from 'Redux/action/index';
import '../index.scss';

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
const mapStateToProps = (state) => ({
  navStatus:getNavStatus(state)
})

const mapDispatchToProps = dispatch =>({
  onCollapse :()=>dispatch(toggleNavStatus())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dealing)
