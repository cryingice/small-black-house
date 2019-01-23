/*
 * @Author: duanlinlin 
 * @Date: 2019-01-23 16:08:36 
 * @Last Modified by:   duanlinlin 
 * @Last Modified time: 2019-01-23 16:08:36 
 */
import React, { Component } from 'react'
import { Steps, Button, message } from 'antd';
// import config from 'Libs/config'
import config from '../../../libs/config'
import { NEXT, PRE, COMPLETE } from 'Libs/constant';
import MButton from './MButton';
const Step = Steps.Step;
const { install } = config.home;
const { steps, buttonStatus } = install;    //config file: steps button

//steps current status 
const fuctionList = {
  NEXT(){
    const current = this.state.current + 1;
    this.setState({ current });
  },
  PRE(){
    const current = this.state.current - 1;
    this.setState({ current });
  },
  COMPLETE(){
    message.success('恭喜获得屠龙宝刀一把!')
  },
}
/**
 * @description the steps about install project
 *
 * @export
 * @class Mstep
 * @extends {Component}
 */
export default class Mstep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,  //stepNum 0,1,2
    }
  }

  /**
   * @description trigger 
   * @param {Number} index 
   */
  changeCurrentStatu(index) {
    this.setState({ current: index });
  }
/**
 * @description create button
 * @param {*} typeKey 
 */
  createButtonDom(typeKey) {
    const len =buttonStatus[typeKey].length;
    return buttonStatus[typeKey].map((single) => {
      return <MButton key={single.key} antdTpe={single.antdTpe} function={fuctionList[single.functional].bind(this)} text={single.text} />
    })
  }

  render() {
    const { current } = this.state;
    const typeKey = Object.keys(buttonStatus).find(item => {
      return `step${current+1}` === item
    })
    
    const buttonCoponentList = this.createButtonDom(typeKey);   
    return (
      <div className='install-mstep'>
        <Steps current={current}>
          {steps.map((item, index) => <Step key={item.title} title={item.title} onClick={()=>this.changeCurrentStatu(index)} />)}
        </Steps>
        <div className="steps-content" dangerouslySetInnerHTML={{ __html: steps[current].content }}></div>
        <div className="steps-action">
          {buttonCoponentList}
        </div>
      </div>
    );
  }
}
