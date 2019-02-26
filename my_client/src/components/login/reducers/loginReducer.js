import * as types from '../actions/ActionTypes';

const initialState = {
    userLogged: false,
    loginError: false,
    login: ''
};

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_FAILED:
            return updateObject(state, {
                userLogged: false,
                loginError: true
            });

        case types.USER_SUCCESSFULLY_LOGGED:
            return updateObject(state, {
                userLogged: true,
                loginError: false
            });

        case types.INPUT_LOGIN_WAS_CHANGED:
            return updateObject(state, {
                userLogged: false,
                loginError: false,
                login: action.login
            });

        case types.INPUT_PASSWORD_WAS_CHANGED:
            return updateObject(state, {
                userLogged: false,
                loginError: false
            });

        default:
            return state;
    }
}

function updateObject(obj, newProperties) {
    return Object.assign({}, obj, newProperties);
}

export default loginReducer;