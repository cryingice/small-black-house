/*
 * @Author: duanlinlin 
 * @Date: 2018-12-11 18:23:43 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2018-12-11 20:47:30
 */
import { connect } from 'react-redux';
import Mheader from '../Mheader'
import { turnOff, turnOn, toggleNavStatus } from 'Redux/action/index'
import {StateToPropsCommonMethod}  from 'Libs/mutils';


const { getNavStatus } = StateToPropsCommonMethod;  //get status of navgation

//html antd
const iconsName ={
  fold : 'menu-fold',
  unfold : 'menu-unfold'
}
const mapStateToProps = state => {
    return {
        navStatus: getNavStatus(state),
        iconsName: getNavStatus(state) ? iconsName['fold'] : iconsName['unfold']
    }
}
const mapDispatchToProps = dispatch => ({
    turnOff: () => dispatch(turnOff()),
    turnOn: () => {
        dispatch(turnOn())
    },
    toggleStatus: () => (dispatch(toggleNavStatus()))
})

export default connect(mapStateToProps, mapDispatchToProps)(Mheader)