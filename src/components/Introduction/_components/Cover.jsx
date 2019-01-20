import React from 'react';
import '../scss/cover.scss'

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
