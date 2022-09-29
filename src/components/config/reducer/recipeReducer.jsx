const initialState = {
  recipe: [],
  recipeDetail: [],
};

export const recipeReducer = (state = initialState, action) => {
  if (action.type === "GET_DETAIL_RECIPE") {
    return {
      ...state,
      recipeDetail: action.payload,
    };
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
