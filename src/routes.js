import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import LandingPage from './Components/LandingPage/LandingPage';
import Settings from './Components/Settings/Settings';

export default (
    <Switch>
        <Route component={LandingPage} exact path = '/'/>
        <Route component={Auth} exact path = '/auth'/>
        <Route component={Settings} exact path ='/settings'/>
    </Switch>
)
