/*
 * @Author: duanlinlin 
 * @Date: 2018-12-11 18:22:26 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2018-12-11 20:03:43
 */
import Home from '../components/Home/Home';
import Charts from '../components/Charts/Charts';
import Introduction from '../components/Introduction/Introduction';
export const StateToPropsCommonMethod = {
    /**
     * @description 得到导航栏 展开与否的状态值
     * @param {Object} state 储存中的最新数据
     */
    getNavStatus: (state) => {
        return state.navStatus;
    }
}