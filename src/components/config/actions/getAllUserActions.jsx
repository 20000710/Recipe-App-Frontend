import axios from "axios"

const getAllUser = async(dispatch) => {
    try {
        const users = await axios.get(
            process.env.REACT_APP_API_BACKEND + "/users"
        )
        const result = users.data.data
        dispatch({type: "GET_ALL_USER", payload: result})
    } catch (err) {
        console.log(err.message)
    }
}

export default getAllUser