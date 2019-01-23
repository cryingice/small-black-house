/*
 * @Author: duanlinlin 
 * @Date: 2019-01-23 16:03:16 
 * @Last Modified by:   duanlinlin 
 * @Last Modified time: 2019-01-23 16:03:16 
 */
import React from 'react'
import '../../scss/Skill/SingleSkillContent.scss';

//the content of single skill point
export default (params) => {
    return(
        <div className="single-skill-content">
            {params.singleSkillContentInfo.map((single,idx)=>(
                <span key={idx}>{single}</span>
            ))}
        </div>
    )
};
