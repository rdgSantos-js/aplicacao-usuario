import * as types from '../constants/ActionTypes';


const messages = (state = [], action) => {
    switch(action.type){

        case types.ADD_MESSAGE:
        case types.MESSAGE_RECEIVED:
            return state.concat([{
                message: action.message,
                author: action.author,
                datetime: action.datetime
            }]);
        
                
        default:
            return state

    }
}

export default messages;