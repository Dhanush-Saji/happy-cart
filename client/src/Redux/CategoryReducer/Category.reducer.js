import { GET_CATEGORY_ERROR, GET_CATEGORY_REQUEST, GET_CATEGORY_SUCCESS } from "./Category.actionType"

const initialValue = {
    categoryData:[],
    isLoading:false,
    isError:false
}
export const categoryReducer = (state=initialValue,{type,payload})=>{
    switch(type){

        case GET_CATEGORY_REQUEST:{
            return{...state,isLoading:true}
        }
        case GET_CATEGORY_SUCCESS:{
            return{...state,isLoading:false,categoryData:payload}
        }
        case GET_CATEGORY_ERROR:{
            return{...state,isLoading:false,isError:true}
        }
        default:{
            return state
        }
    }
}