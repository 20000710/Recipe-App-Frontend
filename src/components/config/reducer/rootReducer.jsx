import { combineReducers } from "@reduxjs/toolkit";
import { usersReducers } from "./userReducer";
import { recipeReducer } from "./recipeReducer";

const rootReducer = combineReducers({
  users: usersReducers,
  recipe: recipeReducer,
});

export default rootReducer;
