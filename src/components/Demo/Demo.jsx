import React, { Component } from 'react'
import {CSSTransition} from 'react-transition-group';
import './demo.scss'

export default class Fad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            in: true
        }
    }
    render() {
        const duration = 6000;
        // const defaultStyle = {
        //     transition: `opacity ${duration}ms ease-in-out`,
        //     opacity: 0,
        // }

        // const transitionStyles = {
        //     enter:{opacity: 0},
        //     entering: { opacity: 0.5},
        //     entered: { opacity: 1 },
        // };
        return (
            <CSSTransition in={this.state.in} timeout={duration} classNames="feature">
                <div className="feature">
                    dsdsdsdsdsdsdsds
                    dsdsdsdsdsdsdsds
                    dsdsdsdsdsdsdsds
                    dsdsdsdsdsdsdsds
                </div>
            </CSSTransition>
        )
    }
}