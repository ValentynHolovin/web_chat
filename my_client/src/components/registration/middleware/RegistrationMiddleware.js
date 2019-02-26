import * as types from '../actions/ActionTypes';
import { signUp } from "../api/RegistrationApi";
import { userSuccessfullyRegistered } from "../actions/RegistrationActions";


function signUpMiddleware({getState}) {
    return next => action => {
        switch (action.type) {
            case types.USER_SIGN_UP:
                signUp(action.user)
                    .then(response => {
                        if(response) {
                            next(userSuccessfullyRegistered())
                        }
                    })
                    .catch(e => console.error(e));

                break;

            default:
                break;
        }
        return next(action);
    }
}

export default signUpMiddleware;