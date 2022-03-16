import * as type from "./actionTypes";

 const Login = (state = {users:[]}, action)=>{
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