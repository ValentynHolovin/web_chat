import * as types from '../actions/ActionTypes';
import { signIn } from '../api/loginApi';
import { userSuccessfullyLogged, loginFailed} from '../actions/LoginActions';

function loginMiddleware({getState}) {
    return next => action => {
        switch (action.type) {
            case types.USER_SIGN_IN:
                signIn(action.user)
                    .then(response => {
                        console.log(response.statusCode);
                        if (response.statusCode === 200) {
                            next(userSuccessfullyLogged());
                        } else {
                            next(loginFailed());
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

export default loginMiddleware;