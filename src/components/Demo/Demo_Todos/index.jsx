/*
 * @Author: duanlinlin 
 * @Date: 2018-12-08 22:49:30 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2018-12-09 18:06:51
 */

import React from 'react'
import { render } from 'react-dom'
import { Provide } from 'react-redux'
import { createdStore } from 'redux'
import rootReducer from './reducers'
import App from './components/app'

const store = createStore(rootReducer)

render(
  <Provide store={store}>
    <App />
  </Provide>,
  document.getElementById('root')
)