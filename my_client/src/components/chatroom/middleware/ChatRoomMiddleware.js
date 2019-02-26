import * as types from '../actions/ActionTypes';
import { connectWebSocket } from "../api/ChatRoomApi";
import { receiveMessage } from "../actions/ChatRoomActions";

function chatRoomMiddleware({getState}) {
    return next => action => {
        switch (action.type) {
            case types.USER_CONNECTED:
                connectWebSocket()
                    .then(response => {
                        console.log(response);
                        next(receiveMessage(response));
                    })
                    .catch(e => console.error(e));

                break;

            default:
                break;
        }
        return next(action);
    }
}

export default chatRoomMiddleware;