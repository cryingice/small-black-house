/*
 * @Author: duanlinlin 
 * @Date: 2019-01-23 15:58:08 
 * @Last Modified by:   duanlinlin 
 * @Last Modified time: 2019-01-23 15:58:08 
 */
import React from 'react'
import '../../scss/AreaInfo/AreaInfo.scss'
import SingleInfo from './SingleInfo'

//the some infos in resume's side
export default (params) => {
  const SingleInfoComponents = params.areaData.map(item=>{
    return (<SingleInfo category = {item.category} val ={item.val} key={item.category}/>)
  })
  
  return(
      <div className="area-info">
        {params.children}
        {SingleInfoComponents}
      </div>
  )
}
