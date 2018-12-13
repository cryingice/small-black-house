/*
 * @Author: duanlinlin 
 * @Date: 2018-12-13 16:26:19 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2018-12-13 17:14:49
 */
import React, { Component } from 'react';
import { Card } from 'antd'

import './home.scss';
import config from 'Libs/config';
import Mstep from './_components/Mstep';

const { introduction, install, title } = config.home;   //项目介绍、项目上手、标题
const { star, content } = introduction;
const { steps } = install;

export default class Home extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        
        this.state = {
        }
    }
    render() {
        return (
            <div className="home-page">
                <Card
                    title={title[0]}
                    extra={<a href={star.link} target="_blank">{star.text}</a>}
                >
                    <p>
                        {content}
                    </p>
                </Card>
                <Card
                    title={title[1]}
                >
                    <Mstep />
                </Card>
                <div className="container">
                    我是home
                </div>
            </div>
        )
    }
}