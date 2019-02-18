import * as types from '../actions/ActionTypes';
import { signUp } from "../api/RegistrationApi";


function signUpMiddleware({getState}) {
    return next => action => {
        switch (action.type) {
            case types.USER_SIGN_UP:
                signUp(action.user)
                    .then(response => {
                        console.log(response);
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