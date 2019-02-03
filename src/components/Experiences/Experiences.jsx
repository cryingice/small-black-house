import React, { Component } from 'react';
import Avatar from './_components/Avatar';
import AreaInfo from './_components/AreaInfo/AreaInfo';
import HeaderInfo from './_components/HeaderInfo';
import SlotTitle from './_components/common/SlotTitle';     //the slot of title
import './Experiences.scss';
import experiencesConfig from '../../libs/experiencesConfig';
import ExperienceMainAreaDy from './util/ExperienceMainAreaDy';

/**
 * @description the component to show user's resume
 * @export
 * @class Experiences
 * @extends {Component}
 */
export default class Experiences extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            pageNum: 1,
        }
    }
    setPageNum(type){
        switch (type) {
            case 'next':
                this.setState({pageNum: this.state.pageNum + 1}) 
                break;
            case 'pre':
                this.setState({pageNum: this.state.pageNum - 1}) 
                break;
            default:
                break;
        }
        
    }
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
        const pageNum = this.state.pageNum ? this.state.pageNum  : 1;
        const mainAreaDy = new ExperienceMainAreaDy(pageNum);
        const mainAreaCompontsList = mainAreaDy.getComponentProcessor();

        //mainArea triggle componentLists
        const totalPageNum = mainAreaDy.getTotalPageNum();
        const currentPage = mainAreaDy.getPageNum();
        const triggle = currentPage === 1 ?
            (
                <div className="main-area triggle">
                    <span className="triggle-name" onClick={()=> this.setPageNum('next')}>下一页</span>
                </div>

            ) : (
                currentPage === totalPageNum ?
                    (
                        <div className="main-area triggle">
                            <span className="triggle-name" onClick={()=> this.setPageNum('pre')}>上一页</span>
                        </div>
                    ) : (
                        <div className="main-area triggle">
                            <span className="triggle-name" onClick={()=> this.setPageNum('pre') }>上一页</span>
                            <span className="triggle-name" onClick={()=> this.setPageNum('next') }>下一页</span>
                        </div>
                    )
            )
        return (
            // <div className="tmp">
            //     暂无
            // </div>
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
                        {mainAreaCompontsList}
                        {triggle}
                    </main>
                </div>
            </div>
        );
    }
}

