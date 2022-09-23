const initialState = {
  recipeDetail: [],
};

export const recipeReducer = (state = initialState, action) => {
  if (action.type === "GET_DETAIL_RECIPE") {
    return {
      ...state,
      recipeDetail: action.payload,
    };
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
