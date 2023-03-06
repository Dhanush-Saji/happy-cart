import { ADD_CATEGORY_ERROR, ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS,GET_CATEGORY_REQUEST } from "./Category.actionType"


const initialValue = {
    categoryData:[],
    isLoading:false,
    isError:false
}
export const categoryReducer = (state=initialValue,{type,payload})=>{
    switch(type){
        case ADD_CATEGORY_REQUEST:{
            return{...state,isLoading:true}
        }
        case ADD_CATEGORY_SUCCESS:{
            return{...state,isLoading:false,categoryData:payload}
        }
        case ADD_CATEGORY_ERROR:{
            return{...state,isLoading:false,isError:true}
        }
        case GET_CATEGORY_REQUEST:{
            return{...state,isLoading:true}
        }
        default:{
            return state
        }
    }
}