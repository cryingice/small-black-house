/*
 * @Author: duanlinlin 
 * @Date: 2018-12-11 18:23:43 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2019-01-29 11:37:42
 */
import { connect } from 'react-redux';
import Mheader from '../Mheader'
import { turnOff, turnOn, toggleNavStatus,getUserName } from 'Redux/action/index'
import {StateToPropsCommonMethod}  from 'Libs/mutils';


const { getNavStatus } = StateToPropsCommonMethod;  //get status of navgation

//html antd
const iconsName ={
  fold : 'menu-fold',
  unfold : 'menu-unfold'
}
const mapStateToProps = state => {
    return {
        user:state.userInfo.user,
        navStatus: getNavStatus(state),
        iconsName: getNavStatus(state) ? iconsName['fold'] : iconsName['unfold']
    }
}
const mapDispatchToProps = dispatch => ({
    getUserName:(userName) => dispatch(getUserName(userName)),
    turnOff: () => dispatch(turnOff()),
    turnOn: () => {
        dispatch(turnOn())
    },
    toggleStatus: () => (dispatch(toggleNavStatus()))
})

export default connect(mapStateToProps, mapDispatchToProps)(Mheader)