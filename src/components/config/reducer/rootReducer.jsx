import { combineReducers } from "@reduxjs/toolkit";
import { usersReducers } from "./userReducer";

const rootReducer = combineReducers({
  users: usersReducers,
});

export default rootReducer;
