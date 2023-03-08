import { ADMIN_LOGIN_REQUEST, ADMIN_REGISTER_ERROR, ADMIN_REGISTER_REQUEST, ADMIN_REGISTER_SUCCESS,ADMIN_LOGIN_ERROR, ADMIN_LOGIN_SUCCESS } from './Auth.actionType';

export const registerAdminRequest = () =>{
    return{
        type:ADMIN_REGISTER_REQUEST
    }
}

export const registerAdminSuccess = (payload) =>{
    return{
        type:ADMIN_REGISTER_SUCCESS,payload
    }
}

export const registerAdminError = () =>{
    return{
        type:ADMIN_REGISTER_ERROR
    }
}

export const loginAdminRequest = () =>{
    return{
        type:ADMIN_LOGIN_REQUEST
    }
}

export const loginAdminSuccess = (payload) =>{
    return{
        type:ADMIN_LOGIN_SUCCESS,payload
    }
}

export const loginAdminError = () =>{
    return{
        type:ADMIN_LOGIN_ERROR
    }
}