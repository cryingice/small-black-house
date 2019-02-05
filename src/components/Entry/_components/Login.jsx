import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Input, Icon } from 'antd';
import history from '../../common/history';

import { initHeader, initAnimation, addListeners, destoryListeners } from '../../../libs/carbon'
import '../scss/Login.scss';
/**
 * @description the component of login
 * @export
 * @class Home
 * @extends {Component}
 */
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password:'343',
        };
        this.onChangeUserName=this.onChangeUserName.bind(this);
        // this.emitEmpty = this.emitEmpty.bind(this)
        this.changePassword=this.changePassword.bind(this)
    }
    componentDidMount() {
        this.props.page === 1 && this.openCanvasEffect();
    }
    componentWillUnmount() {
        this.shutDownCanvasEffect();
    }
    //remove listener
    shutDownCanvasEffect() {
        destoryListeners();
    }
    //open effect
    openCanvasEffect() {
        initHeader()
        initAnimation()
        addListeners()
    }
    //tourist modal or login modal
    clickProcessor(category = { type: 'tourist' }) {
        switch (category.type) {
            case login:

                break;
            default:
                console.log(history, 'history');
                history.push({ pathname: '/introduction' })
                break;
        }
    }
    emitEmpty(){
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }

    onChangeUserName(e){
        this.setState({ userName: e.target.value });
    }
    changePassword(event){
        // console.log(event,'eeeepassword');
        this.setState({password:event.target.value})
    }
    render() {
        const class_name = `entry-login ${this.props.page === 1 ? 'active' : ''}`
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={()=>this.emitEmpty()} /> : null;
        return (
            <div id="login" className={class_name}>
                <canvas id="effect-canvas"></canvas>
                <div className="login-page">
                    <div className="login-card">
                        <div className="title">
                            Small Black House
                        </div>
                        <div className="poster-text">
                            我的空间我做主
                        </div>
                        <div className="button button__login" onClick={() => this.clickProcessor({ type: 'login' })}>
                            登录模式
                        </div>
                        <div className="button button__tourist" onClick={() => this.clickProcessor({ type: 'tourist' })}>
                            游客模式
                        </div>
                        <div className="login-input">
                            <div className="login-name">
                                <Input
                                    placeholder="Enter your username"
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    suffix={suffix}
                                    value={userName}
                                    onChange={this.onChangeUserName}
                                    ref={node => this.userNameInput = node}
                                />
                            </div>
                            <div className="login-password">
                                <input type="password" placeholder="Enter your password" onChange={this.changePassword} value={this.state.password}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Login.defaultProps = {
    page: 1,
}
Login.propTypes = {
    page: PropTypes.number
}
export default Login