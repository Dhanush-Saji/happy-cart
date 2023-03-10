
import { GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, GET_PRODUCT_REQUEST } from './Product.actionType';


export const getProductSuccess = (payload) =>{
    return{
        type:GET_PRODUCT_SUCCESS,payload
    }
}

export const getProductError = () =>{
    return{
        type:GET_PRODUCT_ERROR
    }
}

export const getProductRequest = () =>{
    return{
        type:GET_PRODUCT_REQUEST
    }
}