
import { ADD_CATEGORY_ERROR, ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, GET_CATEGORY_REQUEST } from './Category.actionType';
export const addCategoryRequest = () =>{
    return{
        type:ADD_CATEGORY_REQUEST
    }
}

export const addCategorySuccess = (payload) =>{
    return{
        type:ADD_CATEGORY_SUCCESS,payload
    }
}

export const addCategoryError = () =>{
    return{
        type:ADD_CATEGORY_ERROR
    }
}

export const getCategoryRequest = () =>{
    return{
        type:GET_CATEGORY_REQUEST
    }
}
