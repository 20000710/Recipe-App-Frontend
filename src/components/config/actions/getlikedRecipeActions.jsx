import axios from "axios";

const getLikedRecipe = (token) => async (dispatch) => {
  //   console.log("token: ", token);
  try {
    const likedRecipe = await axios.get(
      process.env.REACT_APP_API_BACKEND + "/my-liked-recipe",
      {
        headers: {
          token: token,
        },
      }
    );
    const result = likedRecipe.data.data;
    // console.log('result: ', result)
    dispatch({ type: "GET_LIKED_RECIPE", payload: result });
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: "NOT_FOUND_LIKED_RECIPE",
      message: err.response.data.message,
    });
  }
};

export default getLikedRecipe;
