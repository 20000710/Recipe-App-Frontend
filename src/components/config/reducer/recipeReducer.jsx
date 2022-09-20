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
