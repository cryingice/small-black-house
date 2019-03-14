import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from '../components/common/history'; 

import Entry from '../components/Entry/Entry';
import Valentine from '../components/Valentine/Valentine';
import Dealing from './Dealing';    //the processor of some routes
import Demo from '../components/Demo/Demo';     
// import {StateToPropsCommonMethod} from 'Libs/uitl';


export default class MRoute extends Component {
    render() {
        return (
            <Router history={history} >
                <Switch>
                    <Route path="/home" component={Dealing} />
                    <Route path="/experiences" component={Dealing} />
                    <Route path="/entry" component={Entry} />
                    <Route path="/valentine" component={Valentine} />
                    <Route path="/demo" component={Demo} />
                    <Route path="/creative" component={Dealing} />
                    <Route path="/introduction" component={Dealing} />
                    <Redirect to='/home' />
                </Switch>
            </Router>
        )
    }
}

