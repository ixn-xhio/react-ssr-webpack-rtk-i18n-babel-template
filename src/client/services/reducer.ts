import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './user/index';

export default combineReducers({
    user: userReducer,
});
