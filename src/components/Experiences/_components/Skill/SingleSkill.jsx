import React from 'react'
import Percent from './Percent'
import SingleSkillContent from './SingleSkillContent';
import '../../scss/Skill/SingleSkill.scss';

export default (params) => {
    return (
        <div className="single-skill">
            <Percent></Percent>
            <SingleSkillContent></SingleSkillContent>
        </div>
    )
}
