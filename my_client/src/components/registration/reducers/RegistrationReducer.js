import * as types from '../actions/ActionTypes';


const initialState = {
    emailIsUnique: true,
    loginIsUnique: true,
    passwordConfirmed: true,
    userRegistered: false
};

function signUpReducer(state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_WAS_CHANGED:
            return updateObject(state, {
                loginIsUnique: true
            });

        case types.PASSWORD_WAS_CHANGED:
            return updateObject(state, {
                passwordConfirmed: true
            });

        case types.CONFIRM_PASSWORD_WAS_CHANGED:
            return updateObject(state, {
                passwordConfirmed: true
            });

        case types.EMAIL_WAS_CHANGED:
            return updateObject(state, {
                emailIsUnique: true
            });

        case types.LOGIN_NOT_UNIQUE:
            return updateObject(state, {
                loginIsUnique: false
            });

        case types.EMAIL_NOT_UNIQUE:
            return updateObject(state, {
                emailIsUnique: false
            });

        case types.CONFIRM_PASSWORD_FAILED:
            return updateObject(state, {
                passwordConfirmed: false
            });

        case types.USER_SUCCESSFULLY_REGISTERED:
            return updateObject(state, {
                userRegistered: true
            });

        default:
            return state;
    }
}

function updateObject(obj, newProperties) {
    return Object.assign({}, obj, newProperties);
}

export default signUpReducer;