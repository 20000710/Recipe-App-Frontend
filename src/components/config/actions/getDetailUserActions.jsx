import axios from "axios"

const getAllUser = (id) => async(dispatch) => {
    try {
        const users = await axios.get(
            process.env.REACT_APP_API_BACKEND + "/users" + id
        )
        const result = users.data.data
        dispatch({type: "GET_DETAIL_USER", payload: result})
    } catch (err) {
        console.log(err.message)
    }
}

export default getAllUser