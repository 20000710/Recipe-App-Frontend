const initialState = {
  recipe: [],
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
  } else if (action.type === "GET_ALL_RECIPE") {
    return {
      ...state,
      recipe: action.payload,
    };
  } else if (action.type === "CREATE_PRODUCT") {
    return state;
  } else if (action.type === "DELETE_PRODUCT") {
    return state;
  } else if (action.type === "UPDATE_RECIPE") {
    return state;
  } else {
    return state;
  }
};

export const getNewRecipe = (state = initialState, action) => {
  if (action.type === "GET_NEW_RECIPE") {
    return {
      ...state,
      recipeDetail: action.payload,
    };
  } else {
    return state;
  }
};
