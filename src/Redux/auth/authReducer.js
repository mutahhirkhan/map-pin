import { REMOVE_USER, SET_USER } from './authConstants';

var initialState = null;

var authReducer = (state = initialState, actions) => {
    var {type, payload} = actions
    switch (type) {
        case SET_USER:
            return payload.user
        case REMOVE_USER:
            return null
    
        default:
            return state;
    }
}

export default authReducer;