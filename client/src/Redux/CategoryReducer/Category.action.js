
import { GET_CATEGORY_SUCCESS, GET_CATEGORY_ERROR, GET_CATEGORY_REQUEST } from './Category.actionType';

export const getCategorySuccess = (payload) =>{
    return{
        type:GET_CATEGORY_SUCCESS,payload
    }
}

export const getCategoryError = () =>{
    return{
        type:GET_CATEGORY_ERROR
    }
}

export const getCategoryRequest = () =>{
    return{
        type:GET_CATEGORY_REQUEST
    }
}
