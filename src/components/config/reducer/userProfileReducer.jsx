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
    } else if(action.type === "GET_DETAIL_USER"){
        return{
            ...state,
            detailUser: action.payload
        }
    } else{
        return state
    }
}

export default userProfileReducer