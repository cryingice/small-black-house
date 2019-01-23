/*
 * @Author: duanlinlin 
 * @Date: 2019-01-23 15:59:13 
 * @Last Modified by:   duanlinlin 
 * @Last Modified time: 2019-01-23 15:59:13 
 */
import React from 'react'
import '../../scss/AreaInfo/SingleInfo.scss'
//the single info in in resume's areaInfo
export default (params) => {
    return (
        <div className="single-info">
            <span className="category">{params.category}</span>
            <span className="val">{params.val}</span>
        </div>
    )
}
