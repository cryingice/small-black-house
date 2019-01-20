import React from 'react'
import '../../scss/AreaInfo/SingleInfo.scss'
export default (params) => {
    return (
        <div className="single-info">
            <span className="category">{params.category}</span>
            <span className="val">{params.val}</span>
        </div>
    )
}
