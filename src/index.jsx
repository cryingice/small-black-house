import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import 'babel-polyfill';    //map set generator es6属性
import 'normalize.css';
import Route from './routes/index.jsx';
import registerServiceWorker from './serviceWorker';
import reducer from './redux/reducer/index';

const store = createStore(reducer, 
    composeWithDevTools(
    applyMiddleware(
        thunk,
        createLogger
    ))
);


ReactDOM.render(
    <Provider store={store}>
        <Route />
    </Provider>
    ,
    document.getElementById('app')
);
