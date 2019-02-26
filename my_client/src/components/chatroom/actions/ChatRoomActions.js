import * as types from './ActionTypes';

export const sendMessage = (message) => {
    return {
        type: types.SEND_MESSAGE,
        message
    }
};

export const receiveMessage = (message) => {
    return {
        type: types.RECEIVE_MESSAGE,
        message
    }
};

export const userConnected = () => {
    return {
        type: types.USER_CONNECTED
    }
};