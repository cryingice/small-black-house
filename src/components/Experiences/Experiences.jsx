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
        const { aside, titles } = CN;
        const AreaInfoComponents = Object.keys(aside).reduce((accumulator, currentValue) => {
            return accumulator.concat(
                <AreaInfo areaData={aside[currentValue]} key={currentValue} title={titles[currentValue]} >
                    <SlotTitle title={titles[currentValue]}/>
                </AreaInfo>)
        }, [])
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
                            <SingleSkill></SingleSkill>
                        </div>
                    </main>
                </div>
            </div>
        );
    }
}

