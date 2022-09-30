const initialState = {
  recipeDetail: [],
  likedRecipe: [],
  savedRecipe: [],
};

export const recipeReducer = (state = initialState, action) => {
  if (action.type === "GET_DETAIL_RECIPE") {
    return {
      ...state,
      recipeDetail: action.payload,
    };
  } else if (action.type === "GET_LIKED_RECIPE") {
    return {
      ...state,
      likedRecipe: action.payload
    }
  } else if(action.type === "NOT_FOUND_LIKED_RECIPE"){
    return {
      ...state,
      likedRecipe: action.message
    }
  } else if (action.type === "GET_SAVED_RECIPE") {
    return {
      ...state,
      savedRecipe: action.payload
    } 
  } else if(action.type === "NOT_FOUND_SAVED_RECIPE"){
    return {
      ...state,
      savedRecipe: action.message
    }
  } else {
    return state;
  }
};
