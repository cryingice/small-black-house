import React, { Component } from 'react';
import Login from './_components/Login';
import Description from './_components/Description';
import config from '../../libs/config'
import './Entry.scss';
/**
 * @description the component of login
 * @export
 * @class Home
 * @extends {Component}
 */
export default class Entry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
        }
    }
    changePage(sortNum){
        let tmpCurrentPage = (!!sortNum && sortNum.split().join('')[0]) || '1';
        this.setState({
            currentPage: this.state.currentPage  =  +tmpCurrentPage,
        })
        tmpCurrentPage == 2 && this.refs.description.createCanvasEffect();
        tmpCurrentPage == 1 && this.refs.description.clearFeatureContent();
    }
    render() {
        const {loginInfo={},descriptionInfo={}} = config.entry;
        return (
            <div className="entry">
                <Login page={this.state.currentPage} loginInfo={loginInfo}/>
                <Description page={this.state.currentPage} descriptionInfo={descriptionInfo} ref="description"/>
                <div className="dot-triggle">
                    <span className={this.state.currentPage === 1 ? "dot__single active" : "dot__single"}
                    onClick={()=>this.changePage('1st')}
                    ></span>
                    <span className={this.state.currentPage === 2 ? "dot__single active" : "dot__single"}
                    onClick={()=>this.changePage('2st')}></span>
                </div>
            </div>
        )
    }
}