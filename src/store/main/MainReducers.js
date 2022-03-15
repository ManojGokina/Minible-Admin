import * as type from "./MainTypes";

const initialState = {
    users:[],
}

 const usersData = (state = initialState, action)=>{
    switch(action.type){
        case type.GET_USERS:
        return {
            ...state,
            users:action.payload
        }
        default:
            return state;
    }
}

export default usersData;