import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from '../components/common/history';

import Login from '../components/Login/Login';
import Dealing from './Dealing';
import Demo from '../components/Demo/Demo';
// import {StateToPropsCommonMethod} from 'Libs/uitl';

// console.log('StateToPropsCommonMethod',StateToPropsCommonMethod);

export default class MRoute extends Component {
    render() {
        return (
            <Router history={history} >
                <Switch>
                    <Route path="/home" component={Dealing} />
                    <Route path="/login" component={Login} />
                    <Route path="/demo" component={Demo} />
                    <Route path="/charts" component={Dealing} />
                    <Route path="/introduction" component={Dealing} />
                    <Redirect to='/home' />
                </Switch>
            </Router>
        )
    }
}

