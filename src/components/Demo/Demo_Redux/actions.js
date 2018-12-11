/*
 * @Author: duanlinlin 
 * @Date: 2018-12-07 18:22:51 
 * @Last Modified by:   duanlinlin 
 * @Last Modified time: 2018-12-07 18:22:51 
 */
/**
 * action 类型
 */
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/**
 * 其它的变量
 */
export const VisibilityFilters = {
  SHOW_ALL:'SHOW_ALL',
  SHOW_COMPLETED:'SHOW_COMPLETED',
  SHOW_ACTIVE:'SHOW_ACTIVE'
}

/**
 * action 函数
 */
export function addTodo(text) {
  return {type:ADD_TODO,text}
}

export function toggleTodo(index) {
  return{type:TOGGLE_TODO,index}
}

export function setVisibilityFilter(filter) {
  return {type:SET_VISIBILITY_FILTER,filter}
}