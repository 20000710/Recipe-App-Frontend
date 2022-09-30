import { combineReducers } from "@reduxjs/toolkit";
import { usersReducers } from "./userReducer";
import { recipeReducer } from "./recipeReducer";
import { userProfileReducer } from "./userProfileReducer";

const rootReducer = combineReducers({
  users: usersReducers,
  recipe: recipeReducer,
  userProfile: userProfileReducer
});

export default rootReducer;
