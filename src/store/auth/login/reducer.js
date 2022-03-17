import * as type from "./actionTypes";


const initialState = {
  users:[]
}
 const Login = (state =initialState, action)=>{
    switch(action.type){
        case type.GET_USERS_SUCCESS:
        return {
            ...state,
            users:action.userApi
        }
        default:
            return state;
    }
}

export default Login;