/*
 * @Author: duanlinlin 
 * @Date: 2019-01-23 16:15:27 
 * @Last Modified by:   duanlinlin 
 * @Last Modified time: 2019-01-23 16:15:27 
 */
import React from 'react';
import '../scss/cover.scss'

//the cover when hover picture
export default (params) => {
  
    return (
        <div className="cover">
            <div className="mid">
                <span className="title">{params.title}</span>
                <span className="sub">{params.sub}</span>
            </div>
        </div>
    )
}
