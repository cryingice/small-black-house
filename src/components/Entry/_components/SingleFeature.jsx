/*
 * @Author: duanlinlin 
 * @Date: 2019-02-02 11:26:35 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2019-02-02 11:50:29
 */
import React from 'react'
import {Icon} from 'antd'
import '../scss/SingleFeature.scss'
//single feature point in description before loging
export default (params) => {
    return (
        <div className="single-feature">
            <div className="feature-avatar">
                <Icon className="feature-icon" type={params.iconType} theme="twoTone" />
            </div>
            <span className="feature-name">
                {params.title}
            </span>
            <span className="feature-detail">
                {params.detailContent}
            </span>
        </div>
    )
};

