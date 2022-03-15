import * as type from './MainTypes';

export const getUsers= (users)=> {
    return {
        type:type.GET_USERS,
        payload:users
    }
}