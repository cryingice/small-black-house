import { TURN_OFF,TURN_ON,TOGGLE_NAV_STATUS } from '../constants/index'

export const turnOff =()=>({
  type: TURN_OFF
})

export const turnOn =()=>({
  type: TURN_ON
})

export const toggleNavStatus = ()=>({
  type: TOGGLE_NAV_STATUS
})