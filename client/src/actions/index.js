import * as types from '../constants/ActionTypes';

export const addMessage = (message, author, datetime) => ({
    type: types.ADD_MESSAGE,
    message,
    author,
    datetime
})

export const messageReceived = (message, author, datetime)=> ({
    type: types.MESSAGE_RECEIVED,
    message,
    author,
    datetime
})
