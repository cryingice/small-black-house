import { TURN_OFF,TOGGLE_NAV_STATUS } from '../../constants/index'
const navStatus = (state = true,action) =>{
  switch (action.type) {
    case TURN_OFF:
      return false;
    case TOGGLE_NAV_STATUS:
      return !state;
    default:
      return state;
  }
}

export default navStatus