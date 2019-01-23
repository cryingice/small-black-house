/*
 * @Author: duanlinlin 
 * @Date: 2019-01-23 16:01:42 
 * @Last Modified by:   duanlinlin 
 * @Last Modified time: 2019-01-23 16:01:42 
 */
import React from 'react'
import '../../scss/Skill/Percent.scss'

//html percent 
export default (params) => {
  return(
      <div className="percent">
        <div className={`left-per-${params.percentInfo.rateNum} cicle base left`}></div>
        <div className={`right-per-${params.percentInfo.rateNum} cicle base right`}></div>
        <div className={`hide-cover-per-${params.percentInfo.rateNum} hide-cover`}></div>
        <div className="category-text">
            <div>{params.percentInfo.percentText}</div>
            <div>{`${params.percentInfo.rateNum * 0.1}`}</div>
        </div>
      </div>
  )
}
