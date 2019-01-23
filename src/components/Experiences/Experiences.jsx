import React, { Component } from 'react';
import Avatar from './_components/Avatar';
import AreaInfo from './_components/AreaInfo/AreaInfo';
import HeaderInfo from './_components/HeaderInfo';
import SlotTitle from './_components/common/SlotTitle';     //the slot of title
import SingleSkill from './_components/Skill/SingleSkill';
import './Experiences.scss';
import experiencesConfig from '../../libs/experiencesConfig';

/**
 * @description the component to show user's resume
 * @export
 * @class Experiences
 * @extends {Component}
 */
export default class Experiences extends Component {
    render() {
        const { CN } = experiencesConfig;
        const { aside, titles, main } = CN;
        //asideArea componentLists
        const AreaInfoComponents = Object.keys(aside).reduce((accumulator, currentValue) => {
            return accumulator.concat(
                <AreaInfo areaData={aside[currentValue]} key={currentValue} title={titles[currentValue]} >
                    <SlotTitle title={titles[currentValue]} />
                </AreaInfo>)
        }, []);
        //mainArea skill componentLists
        const skillInfo = main.skill;
        const SingleSkillComponents = skillInfo.content.map((singleSkill, idx) => {
            return (
                <SingleSkill singleInfo={singleSkill} key={idx} />
            )
        })
        //mainArea first page keywords
        //colors
        const keywordInfo = main.firstPageKeyWord;
        const colorArea = keywordInfo.colorArea;
        // content componentLists
        const keywords = keywordInfo.content.map((key, idx) => {
            const colorVal = colorArea[Math.round((colorArea.length - 1) * Math.random())]
            return (
                <span className="single-key" key={idx} style={{ color: colorVal }}>{key}</span>
            )
        })
        return (
            <div className="tmp">
                暂无
            </div>
            // <div className="experiences">
            //     <header>
            //         <Avatar />
            //         <HeaderInfo />
            //     </header>
            //     <div className="content">
            //         <aside>
            //             {AreaInfoComponents}
            //         </aside>
            //         <main>
            //             <div className="main-area skills">
            //                 <SlotTitle title={skillInfo.title} titleColor={skillInfo.titleColor} />
            //                 {SingleSkillComponents}
            //             </div>
            //             <div className="main-area first-page-keyword">
            //                 <SlotTitle title={keywordInfo.title} titleColor={keywordInfo.titleColor} />
            //                 <div className="keyword-content">
            //                     {keywords}
            //                 </div>
            //                 <div className="triggle">
            //                     <span className="triggle-name">{keywordInfo.triggleText}</span>
            //                 </div>
            //             </div>
            //         </main>
            //     </div>
            // </div>
        );
    }
}

