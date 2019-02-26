import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import MainPage from './layouts/MainPage';
import { Router, Route } from "react-router-dom";

import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <MainPage />
        </Router>
    </Provider>
    , document.getElementById('root'));



