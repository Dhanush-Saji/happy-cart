import { ADMIN_LOGIN_ERROR, ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_REGISTER_ERROR, ADMIN_REGISTER_REQUEST, ADMIN_REGISTER_SUCCESS } from "./Auth.actionType"

const initialValue = {
    userData:[],
    isLoading:false,
    isError:false
}
export const authReducer = (state=initialValue,{type,payload})=>{
    switch(type){
        case ADMIN_LOGIN_REQUEST:{
            return{...state,isLoading:true}
        }
        case ADMIN_LOGIN_SUCCESS:{
            return{...state,isLoading:false,userData:[payload]}
        }
        case ADMIN_LOGIN_ERROR:{
            return{...state,isLoading:false,isError:true}
        }
        case ADMIN_REGISTER_REQUEST:{
            return{...state,isLoading:true}
        }
        case ADMIN_REGISTER_SUCCESS:{
            return{...state,isLoading:false,userData:[payload]}
        }
        case ADMIN_REGISTER_ERROR:{
            return{...state,isLoading:false,isError:true}
        }
        default:{
            return state
        }
    }
}