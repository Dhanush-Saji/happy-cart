
import { ADD_PRODUCT_ERROR, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, GET_PRODUCT_REQUEST } from './Product.actionType';


export const addProductRequest = () =>{
    return{
        type:ADD_PRODUCT_REQUEST
    }
}

export const addProductSuccess = (payload) =>{
    return{
        type:ADD_PRODUCT_SUCCESS,payload
    }
}

export const addProductError = () =>{
    return{
        type:ADD_PRODUCT_ERROR
    }
}

export const getProductRequest = () =>{
    return{
        type:GET_PRODUCT_REQUEST
    }
}