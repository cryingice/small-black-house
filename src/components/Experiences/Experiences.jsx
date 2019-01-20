import React, { Component } from 'react';
import Avatar from './_components/Avatar';
import AreaInfo from './_components/AreaInfo/AreaInfo';
import HeaderInfo from './_components/HeaderInfo';
import SlotTitle from './_components/common/SlotTitle';
import SingleSkill from './_components/Skill/SingleSkill';
import './Experiences.scss';
import experiencesConfig from '../../libs/experiencesConfig';

export default class Experiences extends Component {
    render() {
        const { CN } = experiencesConfig;
        const { aside, titles ,main} = CN;
        const AreaInfoComponents = Object.keys(aside).reduce((accumulator, currentValue) => {
            return accumulator.concat(
                <AreaInfo areaData={aside[currentValue]} key={currentValue} title={titles[currentValue]} >
                    <SlotTitle title={titles[currentValue]}/>
                </AreaInfo>)
        }, []);
        const SingleSkillComponents = main.skill.map((singleSkill,idx)=>{
            return(
                <SingleSkill singleInfo={singleSkill} key={idx}/>
            )
        })
        return (
            <div className="experiences">
                <header>
                    <Avatar />
                    <HeaderInfo />
                </header>
                <div className="content">
                    <aside>
                        {AreaInfoComponents}
                    </aside>
                    <main>
                        <div className="skills">
                            <SlotTitle title='技能点'/>
                            {SingleSkillComponents}
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

