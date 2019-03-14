import React, { Component } from 'react';
import LoveText from './_components/LoveText';
import Vindication from './_components/Vindication';
import config from '../../libs/config'
import './Valentine.scss';
/**
 * @description the component of Valentine's surprise 
 * @export
 * @class Home
 * @extends {Component}
 */
export default class Valentine extends Component {
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
        tmpCurrentPage == 2 && this.refs.lovetext.shadowText();
        tmpCurrentPage == 2 && this.refs.vindication.createCanvasEffect();
        tmpCurrentPage == 1 && this.refs.vindication.clearFeatureContent();
        tmpCurrentPage == 1 && this.refs.lovetext.timerProcessor();
    }
    render() {
        const {loveTextInfo ={loveTextMag:[]},descriptionInfo={}} = config.valentine;
        return (
            <div className="entry">
                <LoveText page={this.state.currentPage} loveTextInfo={loveTextInfo} ref="lovetext"/>
                <Vindication page={this.state.currentPage} descriptionInfo={descriptionInfo} ref="vindication"/>
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