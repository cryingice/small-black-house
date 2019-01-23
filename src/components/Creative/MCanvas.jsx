/*
 * @Author: duanlinlin 
 * @Date: 2019-01-23 15:53:14 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2019-01-23 19:52:51
 */
import React,{Component} from 'react';
import './MCanvas.scss';
import {init,destory} from '../../libs/trails';
/**
 * @description cavans 
 *
 * @export
 * @class Canvas works
 * @extends {Component}
 */
export default class Canvas extends Component{
    componentDidMount(){
        init();
    }
    componentWillUnmount(){
        destory();
    }
    render(){
        return (
            <div className="mCanvas">
                <canvas id="world"></canvas>
            </div>
        );
    }
}