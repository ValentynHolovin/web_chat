import * as types from '../actions/ActionTypes';

const initialState = {
    receivedMessage: ''
};


function chatRoomReducer(state = initialState, action) {
    switch (action.type) {
        case types.RECEIVE_MESSAGE:
            return updateObject(state, {
                receivedMessage: action.message
            });

        case types.SEND_MESSAGE:
            return updateObject(state, {
                receivedMessage: action.message
            });

        default:
            return state;
    }
}

function updateObject(obj, newProperties) {
    return Object.assign({}, obj, newProperties);
}

export default chatRoomReducer;