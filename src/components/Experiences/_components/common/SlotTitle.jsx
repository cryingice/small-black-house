import React from 'react'
import '../../scss/SlotTitle.scss'
export default (params) => {
  return(
        <span className="sub-title">
            {params.title}
        </span>
  )
}
