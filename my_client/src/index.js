import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import MainPage from './layouts/MainPage';
import Login from "./components/login/Login";


ReactDOM.render(
    <Provider store={store}>
        <Login />
    </Provider>
    , document.querySelector('.container'));



