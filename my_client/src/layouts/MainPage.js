import React from "react";
import {
    Router,
    Route,
    Link,
    Redirect,
    withRouter,
    Switch
} from "react-router-dom";

import Login from '../components/login/Login';
import SignUp from '../components/registration/SignUp';
import ChatRoom from '../components/chatroom/ChatRoom';


export default () => (
    <div className='container'>
        <Switch>
            <Route exact path="/" component={ChatRoom}/>
            <Route exact path="/login" component={Login}/>
            <Route path="/registration" component={SignUp}/>
        </Switch>
    </div>
)