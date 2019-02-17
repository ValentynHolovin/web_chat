import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger'

import loginMiddleware from './components/login/middleware/loginMiddleware'

import loginReducer from './components/login/reducers/loginReducer'

const middleware = [
    thunk,
    loginMiddleware,
    createLogger(),
];

const store = createStore(
    combineReducers({
        loginReducer: loginReducer
    }),
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;