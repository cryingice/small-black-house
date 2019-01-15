import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';
import reducer from '../reducer/index.jsx';

export default createStore(reducer, 
    composeWithDevTools(
    applyMiddleware(
        thunk,
        createLogger
    ))
);