import {combineReducers} from 'redux';

import navStatus from './navStatus/navStatus';
import userInfo from './user/index';

export default  combineReducers({
  navStatus,userInfo
})
// export default navStatus