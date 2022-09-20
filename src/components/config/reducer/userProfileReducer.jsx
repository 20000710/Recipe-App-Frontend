const initialState = {
    users: [],
    detailUser: []
}

const userProfileReducer = (state = initialState, action) => {
    if(action.type === "GET_ALL_USER"){
        return{
            ...state,
            users: action.payload
        }
    } else{
        return state
    }
}

export default userProfileReducer