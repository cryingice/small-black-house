import React, { Component } from 'react';
import PropTypes from 'prop-types'

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
    render() {
        const class_name = `entry-login ${this.props.page === 1 ? 'active' : ''}`
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
                        <div className="button button__login">
                                登录模式
                        </div>
                        <div className="button button__tourist">
                                游客模式
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