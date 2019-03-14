/*
 * @Author: duanlinlin 
 * @Date: 2018-12-13 16:26:19 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2019-03-14 15:43:01
 */
import React, { Component } from 'react';
import { Card } from 'antd'

import './home.scss';
import config from 'Libs/config';
import Mstep from './_components/Mstep';    //how to loading and install

const { introduction, install, title } = config.home;   //about project
const { star, content, accessLink } = introduction;
const { steps } = install;

/**
 * @description main page(default page)
 *
 * @export
 * @class Home
 * @extends {Component}
 */
export default class Home extends Component {
    constructor(props) {
        super(props);
        console.log(this.props,'props');
        
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