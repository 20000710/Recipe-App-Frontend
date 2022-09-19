import axios from "axios";
import Swal from "sweetalert2";

export const getDetailRecipe = (id) => async (dispatch) => {
  try {
    const recipe = await axios.get(
      process.env.REACT_APP_API_BACKEND + "/recipe/" + id
    );

    const result = recipe.data.data;
    console.log(result);
    dispatch({ type: "GET_DETAIL_RECIPE", payload: result });
  } catch (error) {
    Swal.fire({
      text: error,
      icon: "error",
    });
  }
};
