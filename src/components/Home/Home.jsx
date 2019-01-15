/*
 * @Author: duanlinlin 
 * @Date: 2018-12-13 16:26:19 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2019-01-15 12:07:14
 */
import React, { Component } from 'react';
import { Card } from 'antd'

import './home.scss';
import config from 'Libs/config';
import Mstep from './_components/Mstep';    //项目上手组件

const { introduction, install, title } = config.home;   //项目介绍、项目上手、标题
const { star, content, accessLink } = introduction;
const { steps } = install;

export default class Home extends Component {
    constructor(props) {
        super(props);
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
                <Card
                    title={title[2]}
                >
                    <div dangerouslySetInnerHTML={{ __html: accessLink }}></div>
                </Card>
            </div>
        )
    }
}