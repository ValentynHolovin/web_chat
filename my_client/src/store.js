import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger'

import loginMiddleware from './components/login/middleware/loginMiddleware'
import signUpMiddleware from './components/registration/middleware/RegistrationMiddleware'
import chatRoomMiddleware from './components/chatroom/middleware/ChatRoomMiddleware'

import loginReducer from './components/login/reducers/loginReducer'
import signUpReducer from './components/registration/reducers/RegistrationReducer'
import chatRoomReducer from './components/chatroom/reducers/ChatRoomReducer'

const middleware = [
    thunk,
    loginMiddleware,
    signUpMiddleware,
    chatRoomMiddleware,
    createLogger(),
];

const store = createStore(
    combineReducers({
        loginReducer: loginReducer,
        signUpReducer: signUpReducer,
        chatRoomReducer: chatRoomReducer
    }),
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;