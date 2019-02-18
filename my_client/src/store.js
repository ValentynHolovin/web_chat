import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger'

import loginMiddleware from './components/login/middleware/loginMiddleware'
import signUpMiddleware from './components/registration/middleware/RegistrationMiddleware'

import loginReducer from './components/login/reducers/loginReducer'
import signUpReducer from './components/registration/reducers/RegistrationReducer'

const middleware = [
    thunk,
    loginMiddleware,
    signUpMiddleware,
    createLogger(),
];

const store = createStore(
    combineReducers({
        loginReducer: loginReducer,
        signUpReducer: signUpReducer
    }),
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;