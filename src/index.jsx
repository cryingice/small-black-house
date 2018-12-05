import React from 'react';
import ReactDOM from 'react-dom';

import 'babel-polyfill';    //map set generator es6属性
import 'normalize.css';
import Route from './routes/index.jsx';
import registerServiceWorker from './serviceWorker';

ReactDOM.render(
    <Route />,
    document.getElementById('app')
);
