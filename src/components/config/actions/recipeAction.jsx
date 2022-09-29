import axios from "axios";
import Swal from "sweetalert2";

export const getDetailRecipe = (id) => async (dispatch) => {
  try {
    const recipe = await axios.get(
      process.env.REACT_APP_API_BACKEND + "/recipe/" + id
    );

    const result = recipe.data.data;
    dispatch({ type: "GET_DETAIL_RECIPE", payload: result });
  } catch (error) {
    Swal.fire({
      text: error,
      icon: "error",
    });
  }
};

export const CreateRecipe = (data, saveImage, setShow) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("ingredients", data.ingredients);
    formData.append("user_id", data.user_id);
    formData.append("liked", data.liked);
    formData.append("saved", data.saved);
    formData.append("popularity", data.popularity);
    formData.append("photo", saveImage);
    formData.append("video", data.video);
    const recipe = await axios.post(
      process.env.REACT_APP_API_BACKEND + "/recipe",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    Swal.fire({
      title: "Success!",
      text: recipe.data.message,
      icon: "success",
    });
    setShow(false);
    const result = recipe.data.data;
    dispatch({ type: "CREATE_PRODUCT", payload: result });
  } catch (err) {
    console.error(err);
    alert("crate product failed");
    setShow(false);
  }
};

export const DeleteRecipe = (id, setShow) => async (dispatch) => {
  try {
    const recipe = await axios.delete(
      process.env.REACT_APP_API_BACKEND + "/recipe/" + id
    );
    Swal.fire({
      title: "Success!",
      text: recipe.data.message,
      icon: "success",
    });
    setShow(false);
    const result = recipe.data.data;
    dispatch({ type: "DELETE_PRODUCT", payload: result });
  } catch (err) {
    console.error(err.message);
    alert("delete failed");
    setShow(false);
  }
};

export const UpdateRecipe =
  (data, id, saveImage, setShow) => async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("ingredients", data.ingredients);
      formData.append("user_id", data.user_id);
      formData.append("liked", data.liked);
      formData.append("saved", data.saved);
      formData.append("popularity", data.popularity);
      formData.append("photo", saveImage);
      formData.append("video", data.video);
      const recipe = await axios.put(
        process.env.REACT_APP_API_BACKEND + "/recipe/" + id,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      Swal.fire({
        title: "Success!",
        text: recipe.data.message,
        icon: "success",
      });
      setShow(false);
      const result = recipe.data.data;
      dispatch({ type: "UPDATE_RECIPE", payload: result });
    } catch (err) {
      console.error(err);
      alert("crate product failed");
      setShow(false);
    }
  };

export const GetAllRecipes = () => async (dispatch) => {
  try {
    const recipe = await axios.get(
      process.env.REACT_APP_API_BACKEND + "/recipe"
    );
    const result = recipe.data.data;
    dispatch({ type: "GET_ALL_RECIPE", payload: result });
  } catch (err) {
    console.error(err.message);
  }
};
