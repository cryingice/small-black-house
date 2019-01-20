import React from 'react'
import Percent from './Percent'
import SingleSkillContent from './SingleSkillContent';
import '../../scss/Skill/SingleSkill.scss';

export default (params) => {
    return (
        <div className="single-skill">
            <Percent percentInfo={params.singleInfo.percentInfo}></Percent>
            <SingleSkillContent singleSkillContentInfo={params.singleInfo.singleSkillContentInfo}></SingleSkillContent>
        </div>
    )
}
