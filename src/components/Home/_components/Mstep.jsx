import React, { Component } from 'react'
import { Steps, Button, message } from 'antd';
// import config from 'Libs/config'
import config from '../../../libs/config'
import { NEXT, PRE, COMPLETE } from 'Libs/constant';
import MButton from './MButton';
const Step = Steps.Step;
const { install } = config.home;
const { steps, buttonStatus } = install;    //配置文件: 各步骤文本 按钮配置 

//功能列表可在这自定义
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
export default class Mstep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,  //步骤数 0,1,2
    }
  }

  /**
   * @description 切换选中状态
   * @param {Number} index 
   */
  changeCurrentStatu(index) {
    this.setState({ current: index });
  }
/**
 * @description 创建按钮组件
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
    //需展示的组件集
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
