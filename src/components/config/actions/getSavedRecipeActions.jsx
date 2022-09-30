import axios from "axios"

const getSavedRecipe = (token) => async(dispatch) => {
    console.log('token: ', token)
    try {
        const savedRecipe = await axios.get(
            process.env.REACT_APP_API_BACKEND + "/my-saved-recipe",
            {
                headers: {
                    token: token
                }
            }
        )
        const result = savedRecipe.data.data
        console.log('result: ', result)
        dispatch({type: "GET_SAVED_RECIPE", payload: result})
    } catch (err) {
        console.log("err", err)
        dispatch({type: "NOT_FOUND_SAVED_RECIPE", message: err.response.data.message})
    }
}

export default getSavedRecipe