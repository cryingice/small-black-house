/*
 * @Author: duanlinlin 
 * @Date: 2019-01-23 15:40:36 
 * @Last Modified by:   duanlinlin 
 * @Last Modified time: 2019-01-23 15:40:36 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import 'babel-polyfill';    //map set generator es6属性
import 'normalize.css';   //init css
import Route from './routes/index.jsx';
// import registerServiceWorker from './serviceWorker';
import store from './redux/store/store';


ReactDOM.render(
    <Provider store={store}>
        <Route />
    </Provider>
    ,
    document.getElementById('app')
);
