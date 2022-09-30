import { combineReducers } from "@reduxjs/toolkit";
import { usersReducers } from "./userReducer";
import { recipeReducer } from "./recipeReducer";
import { getNewRecipe } from "./recipeReducer";

const rootReducer = combineReducers({
  users: usersReducers,
  recipe: recipeReducer,
  newRecipe: getNewRecipe,
});

export default rootReducer;
