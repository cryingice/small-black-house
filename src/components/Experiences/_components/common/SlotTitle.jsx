/*
 * @Author: duanlinlin 
 * @Date: 2019-01-23 16:00:31 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2019-01-23 23:20:08
 */
import React from 'react'
import '../../scss/SlotTitle.scss'
//common slot for inserting titleName
export default (params) => {
  const {titleColor='#fff'} = params;
  return(
        <span className="sub-title" style={{color:titleColor}}>
            {params.title}
        </span>
  )
}
