import {USER_LOGIN, USER_LOGOUT} from '../action'

const UserAuth = (data)=>{
    return{
        type: USER_LOGIN,
        data
    }
}

const UserLogout = ()=>{
    return{
        type: USER_LOGOUT
    }
}

export {UserAuth, UserLogout}