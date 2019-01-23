/*
 * @Author: duanlinlin 
 * @Date: 2019-01-23 15:51:40 
 * @Last Modified by:   duanlinlin 
 * @Last Modified time: 2019-01-23 15:51:40 
 */
import { connect } from 'react-redux'
import Mmenus from '../Mmenus';
import {StateToPropsCommonMethod} from 'Libs/muitls';
import { toggleNavStatus } from 'Redux/action/index'

const {getNavStatus} = StateToPropsCommonMethod;

const mapStateToProps = (state) => ({
  navStatus:getNavStatus(state)
})


const mapDispatchToProps = {
  onCollapse :(dispatch)=>(dispatch(toggleNavStatus()))
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Mmenus)
