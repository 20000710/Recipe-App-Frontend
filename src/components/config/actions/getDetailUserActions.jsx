import axios from "axios"

const getDetailUser = (id, token) => async(dispatch) => {
    console.log('id: ', id)
    console.log('token: ', token)
    try {
        const detailUser = await axios.get(
            process.env.REACT_APP_API_BACKEND + "/users/" + id,
            {
                headers: {
                    token: token
                }
            }
        )
        const result = detailUser.data.data
        console.log('result: ', result)
        dispatch({type: "GET_DETAIL_USER", payload: result})
    } catch (err) {
        console.log(err.message)
    }
}

export default getDetailUser