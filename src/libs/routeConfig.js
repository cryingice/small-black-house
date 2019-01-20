/*
 * @description: route -- component
 * @Author: duanlinlin 
 * @Date: 2018-12-13 16:27:50 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2019-01-19 12:58:50
 */
import Home from '../components/Home/Home';
import Canvas from '../components/Creative/MCanvas';
import Introduction from '../components/Introduction/Introduction';
import Experiences from '../components/Experiences/Experiences';

export default {
  '/home': Home,
  '/creative/Mcanvas': Canvas,
  '/introduction': Introduction,
  '/experiences':Experiences
}