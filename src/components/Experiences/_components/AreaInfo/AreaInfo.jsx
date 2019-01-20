import React from 'react'
import '../../scss/AreaInfo/AreaInfo.scss'
import SingleInfo from './SingleInfo'
export default (params) => {
  const SingleInfoComponents = params.areaData.map(item=>{
    return (<SingleInfo category = {item.category} val ={item.val} key={item.category}/>)
  })
  console.log(params,'paramssdsds');
  
  return(
      <div className="area-info">
        {params.children}
        {SingleInfoComponents}
      </div>
  )
}
