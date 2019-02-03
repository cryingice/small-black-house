/*
 * @Author: duanlinlin 
 * @Date: 2019-01-29 11:20:33 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2019-01-29 11:43:08
 */
import {LOGIN,LOGOUT,GETNAME} from '../../constants/index'

const initState = {
    isAuth:false,
    user:'大吉大利,晚上吃鸡',
    age:18
}
const userInfo = (state = initState,action)=> {
    switch (action.type) {
        case LOGIN:
            return {...state,isAuth:true}
        case LOGOUT:
            return {...state,isAuth:false}
        case GETNAME:
            return {...state,user:action.val}
        default:
            return state
            break;
    }
}
export default userInfo;