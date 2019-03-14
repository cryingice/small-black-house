import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { initHeader, initAnimation, addListeners, destoryListeners } from '../../../libs/carbon'
import '../scss/LoveText.scss';
/**
 * 
 * @description the component of login
 * @export
 * @class Home
 * @extends {Component}
 */
class loveText extends Component {
    constructor(props) {
        super(props);
        let colorArr=[],textMsgArr=[];
        //create textShowArr
        const textShowArrFromProps=this.props.loveTextInfo.loveTextMag.reduce((ac,cu)=>{
            let objTmp = {}
            objTmp[cu._className] = '';
            return Object.assign({},ac,objTmp)
        },{});
        //create colorArr textMsgArr and textShowKeyArr of textShowArr
        const textShowKeyArrFromProps = this.props.loveTextInfo.loveTextMag.reduce((ac,cu)=>{
            colorArr.push(cu.color);
            textMsgArr.push(cu.msg);
            return ac.concat(cu._className);
        },[])
        this.state = {
            textShowArr:JSON.parse(JSON.stringify(textShowArrFromProps)),
            textShowKeyArr:textShowKeyArrFromProps,
            colorArr:colorArr,
            textMsgArr:textMsgArr
        };
    }
    componentDidMount() {
        this.props.page === 1 && this.openCanvasEffect();
        this.timerProcessor();
    }
    componentWillUnmount() {
        this.shutDownCanvasEffect();
    }
    //remove listener
    shutDownCanvasEffect() {
        destoryListeners();
    }
    //open effect
    openCanvasEffect() {
        initHeader()
        initAnimation()
        addListeners()
    }
    //clear or all add
    getNewObjByKeyName(action={type:'show'}){
        let objTmp = {};
        this.state.textShowKeyArr.forEach((keyName)=>{
            objTmp[keyName] = action.type ==='shadow' ? '' : 'show'
        })
        return objTmp;
    }
    //shadow all text
    shadowText(){
        console.log('隐藏了');
        let tmp = this.state.textShowArr;
        let newStatusObj = this.getNewObjByKeyName({type:'shadow'})
        this.setState({textShowArr:Object.assign({},tmp,newStatusObj)})
    }
    /**
     * @description set timer singly
     * @param {*} textShowArr data of state
     * @param {*} keyName  the keyName of textShowArr
     * @param {*} timeDelay the time of delay in single timer 
     * @memberof loveText
     */
    setTimerSingle(textShowArr,keyName,timeDelay){
        let objTmp ={};
        objTmp[keyName] = 'show';
        setTimeout(() => {
            this.setState({textShowArr:Object.assign({},textShowArr,objTmp)})
        }, timeDelay);
    }
    //text action start
    timerProcessor(){
        console.log('开始及时了');
        let totalTime = 0;
        let textShowArr = this.state.textShowArr;
        let allShowStatusObj =this.getNewObjByKeyName({type:'show'});
        this.state.textShowKeyArr.forEach((keyName,idx) => {
            this.setTimerSingle(textShowArr,keyName,(idx+1)*2000);
            totalTime = (idx+1)*2000;
        });
        setTimeout(() => {
            this.setState({textShowArr:Object.assign({},textShowArr,allShowStatusObj)})
        }, totalTime+2000);
    }
    render() {
        const class_name = `entry-login ${this.props.page === 1 ? 'active' : ''}`;
        const keysTmp = Object.keys(this.state.textShowArr);
        const componentLists = keysTmp.map((keyName,idx)=>{
            return(<h5 className={this.state.textShowArr[keyName]} style={{color:this.state.colorArr[idx]}} key={keyName}>
                        {this.state.textMsgArr[idx]}
                </h5>)
        })
        return (
            <div id="login" className={class_name}>
                <canvas id="effect-canvas"></canvas>
                <div className="login-page">
                    <div className="login-card">
                        <div className="poster-text " style={{width:'80%'}}>
                            {componentLists}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
loveText.defaultProps = {
    page: 1,
}
loveText.propTypes = {
    page: PropTypes.number
}
export default loveText