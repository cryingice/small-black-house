import React from 'react'
import '../../scss/Skill/Percent.scss'
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
