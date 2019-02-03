/*
 * @Author: duanlinlin 
 * @Date: 2019-02-02 17:14:22 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2019-02-02 19:03:31
 */
import React, { Component } from 'react'
import '../scss/Fad.scss'

/**
 * the container of style
 * 
 * @export
 * @class Fad
 * @extends {Component}
 */
export default class Fad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ show: true })
        }, 2000);
    }
    render() {
        const class_name = `feature-style-container ${this.state.show ? 'active' : ''}`
        return (
            <div className={class_name}>
                {this.props.children}
            </div>
        )
    }
}
