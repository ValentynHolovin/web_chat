import * as types from './ActionTypes';

export const loginWasChanged = () => {
    return {
        type: types.LOGIN_WAS_CHANGED
    }
};

export const passwordWasChanged = () => {
    return {
        type: types.PASSWORD_WAS_CHANGED
    }
};

export const confirmPasswordWasChanged = () => {
    return {
        type: types.CONFIRM_PASSWORD_WAS_CHANGED
    }
};

export const emailWasChanged = () => {
    return {
        type: types.EMAIL_WAS_CHANGED
    }
};

export const loginNotUnique = () => {
    return {
        type: types.LOGIN_NOT_UNIQUE
    }
};

export const emailNotUnique = () => {
    return {
        type: types.EMAIL_NOT_UNIQUE
    }
};

export const confirmPasswordFailed = () => {
    return {
        type: types.CONFIRM_PASSWORD_FAILED
    }
};

export const userSignUp = (user) => {
    return {
        type: types.USER_SIGN_UP,
        user
    }
};

export const userSuccessfullyRegistered = () => {
    return {
        type: types.USER_SUCCESSFULLY_REGISTERED
    }
}