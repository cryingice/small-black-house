/*
 * @Author: duanlinlin 
 * @Date: 2019-01-20 16:39:52 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2019-01-20 16:42:51
 */
import React from 'react';
import { Icon } from "antd";
import '../scss/HeaderInfo.scss';
import experiencesConfig from '../../../libs/experiencesConfig';
const {headerInfo} = experiencesConfig.CN.header;

export default (params) => {
    const itemComponents = headerInfo.contact.map(item =>(
        <div className ={`${item.class} item`} key={item.type}>
            <Icon type={item.type}/>
            <span>{item.val}</span>
        </div>
    ))
    return (
        <div className="header-info">
            <span className="name"> {headerInfo.name}</span>
            <span className="job">{headerInfo.job}</span>
            <div className="contact">
                {itemComponents}
            </div>
        </div>
    )
}
