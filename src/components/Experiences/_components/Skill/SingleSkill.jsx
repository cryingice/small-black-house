import React from 'react'
import Percent from './Percent'
import SingleSkillContent from './SingleSkillContent';
import '../../scss/Skill/SingleSkill.scss';

//the single skill point in resume's main content
export default (params) => {
    return (
        <div className="single-skill">
            <Percent percentInfo={params.singleInfo.percentInfo}></Percent>
            <SingleSkillContent singleSkillContentInfo={params.singleInfo.singleSkillContentInfo}></SingleSkillContent>
        </div>
    )
}
