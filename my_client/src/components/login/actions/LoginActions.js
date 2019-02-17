import * as types from './ActionTypes';

export const inputLoginWasChanged = () => {
    return {
        type: types.INPUT_LOGIN_WAS_CHANGED
    }
};

export const inputPasswordWasChanged = () => {
    return {
        type: types.INPUT_PASSWORD_WAS_CHANGED
    }
};

export const userSuccessfullyLogged = () => {
    return {
        type: types.USER_SUCCESSFULLY_LOGGED
    }
};

export const loginFailed = () => {
    return {
        type: types.LOGIN_FAILED
    }
};

export const userSignIn = (user) => {
    return {
        type: types.USER_SIGN_IN,
        user
    }
};