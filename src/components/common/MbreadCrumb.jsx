/*
 * @Author: duanlinlin 
 * @Date: 2019-01-14 11:42:09 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2019-01-15 15:47:50
 */
import './scss/MbreadCrumb.scss'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Icon } from 'antd';
import config from '../../libs/config';
const mBreadCrumb = config.mBreadCrumb;

//common breadCrumb
export default (params) => {
    //path sinppets
    const pathSnippets = params.location.split('/').slice(1);
    const pathLists = pathSnippets[0] !== 'home' ?
        pathSnippets.map((item, idx) => {
            const url = `/${pathSnippets.slice(0, idx).join('/')}`;
            const name = mBreadCrumb[item];
            return (
                <Breadcrumb.Item key={idx}>
                    <Link to={url}>{name}</Link>
                </Breadcrumb.Item>
            )
        }) : ''
    return (
        <div className="bread-crumb-container">
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to='/home'><Icon type="home" /> 主页</Link>
                </Breadcrumb.Item>
                {pathLists}
            </Breadcrumb>
        </div>
    )
}
