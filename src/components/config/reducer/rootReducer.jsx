import { combineReducers } from "@reduxjs/toolkit";
import { usersReducers } from "./userReducer";
import { recipeReducer } from "./recipeReducer";
import { userProfileReducer } from "./userProfileReducer";
import { getNewRecipe } from "./recipeReducer";

const rootReducer = combineReducers({
  users: usersReducers,
  recipe: recipeReducer,
  userProfile: userProfileReducer,
  newRecipe: getNewRecipe,
});

export default rootReducer;
