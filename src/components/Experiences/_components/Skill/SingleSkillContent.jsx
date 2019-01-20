import React from 'react'
import '../../scss/Skill/SingleSkillContent.scss';

export default (params) => {
    return(
        <div className="single-skill-content">
            {params.singleSkillContentInfo.map((single,idx)=>(
                <span key={idx}>{single}</span>
            ))}
        </div>
    )
};
