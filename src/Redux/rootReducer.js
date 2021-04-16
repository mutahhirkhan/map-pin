import { combineReducers } from "redux";
import authReducer from './auth/authReducer';

var rootReducer = combineReducers({
    auth: authReducer
})

export default rootReducer