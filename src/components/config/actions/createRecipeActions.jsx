import axios from "axios";
import Swal from "sweetalert2";

const createRecipe = (data, saveImage) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("ingredients", data.ingredients);
        formData.append("user_id", data.user_id);
        formData.append("liked", data.liked);
        formData.append("saved", data.saved);
        formData.append("popularity", data.popularity);
        formData.append("photo",  saveImage);
        formData.append("video", data.video);
        const recipe = await axios.post(process.env.REACT_APP_API_BACKEND + "/recipe", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        console.log('recipe: ', recipe)
        Swal.fire({
            title: "Success!",
            text: 'Success Create Recipe',
            icon: "success",
        });
        const result = recipe.data.data
        dispatch({type: "CREATE_RECIPE", payload: result})
    } catch (err) {
        console.log(err.response.data.error);
        Swal.fire({
            title: "Error!",
            text: err.response.data.message,
            icon: "error",
        });
    }
}

export default createRecipe