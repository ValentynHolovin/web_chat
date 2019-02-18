import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
    Switch
} from "react-router-dom";

import Login from '../components/login/Login';
import SignUp from '../components/registration/SignUp';

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/login" component={Login}/>
            <Route path="/registration" component={SignUp}/>
        </Switch>
    </Router>
)