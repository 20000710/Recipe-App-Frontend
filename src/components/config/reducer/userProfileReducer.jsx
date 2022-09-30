const initialState = {
    // users: [],
    detailUser: []
}

export const userProfileReducer = (state = initialState, action) => {
    console.log('action: ', action)
    if(action.type === "GET_DETAIL_USER"){
        return{
            ...state,
            detailUser: action.payload,
        }
    } else{
        return state;
    }
}

 