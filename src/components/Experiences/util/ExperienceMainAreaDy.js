/*
 * @Author: duanlinlin 
 * @Date: 2019-01-27 23:40:15 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2019-01-28 00:34:21
 */
import React from 'react'
import experiencesConfig from '../../../libs/experiencesConfig';
import SlotTitle from '../_components/common/SlotTitle';     //the slot of title
import SingleSkill from '../_components/Skill/SingleSkill';
import { Timeline, Icon } from 'antd';

/**
 * @description Dynamic structure according to current pageNum 
 * 
 * @export
 * @class ExperienceMainAreaDy
 */
export default class ExperienceMainAreaDy {
    constructor(pageNum){
        this.pageNum = pageNum;
    }
    setPageNum(val){
        this.pageNum = val;
    }
    //current pageNum
    getPageNum(){
        return this.pageNum;
    }
    getTotalPageNum(){
        return experiencesConfig.CN.main.length;
    }
    //get structure components
    getComponentProcessor(){
       const dataList = experiencesConfig.CN.main[this.pageNum-1] || experiencesConfig.CN.main[0];
       const keyArr = this.getKeyArr(dataList);
       return this.getComponentsList(keyArr,dataList);
    }
    //the keys array of data of config
    getKeyArr(list){
        if (Object.prototype.toString(list) !== '[object Object]') {
            console.warn('数据表单只能为对象结构');
            return [];
        }
        return Object.keys(list);
    }
    getComponentsList(keyArr,list){
        return keyArr.reduce((ac,keyName)=>{
           return ac.concat(this.getSingleComponent(keyName,list)) 
        },[])
    }
    //get component according to keyName
    getSingleComponent(keyName,list){
        switch (keyName) {
            case 'skill' :
                return(
                    <div className="main-area skills" key="skill">
                        <SlotTitle title={list[keyName].title} titleColor={list[keyName].titleColor} />
                        {this.getSingleSkillComponents(list[keyName])}
                    </div>
                );
            case 'currentPageKeyWord' :
                return (
                    <div className="main-area first-page-keyword" key="currentPageKeyWord">
                        <SlotTitle title={list[keyName].title} titleColor={list[keyName].titleColor} />
                        <div className="keyword-content">
                            {this.getKeyWords(list[keyName])}
                        </div>
                    </div>
                );
            case 'company' :
            return (
                <div className="main-area company" key="company">
                    <Timeline mode="alternate">
                        {this.getTimeline(list[keyName])}
                    </Timeline>
                </div>
            )
            default:
                break;
        }
    }
    //skill
    getSingleSkillComponents(skillInfo){
        return skillInfo.content.map((singleSkill, idx) => {
            return (
                <SingleSkill singleInfo={singleSkill} key={idx} />
            )
        })
    }
    //currentPageKeyWord
    getKeyWords(keywordInfo){
        const {content,colorArea} = keywordInfo; 
        // content componentLists
        return content.map((key, idx) => {
            //random colors
            const colorVal = colorArea[Math.round((colorArea.length - 1) * Math.random())]
            return (
                <span className="single-key" key={idx} style={{ color: colorVal }}>{key}</span>
            )
        })
    }
    getTimeline(timelineInfo){
        return timelineInfo.content.reduce((ac,keyName)=>{
            const dotCp = keyName.dotMsg.type ? <Icon type={keyName.dotMsg.type} style={{ fontSize: '16px' }} /> : '';
            return ac.concat( <Timeline.Item color={keyName.dotMsg.color} key={keyName.type} dot={dotCp}>{keyName.textMsg.join('-')}</Timeline.Item>) 
         },[])
       
    }
}