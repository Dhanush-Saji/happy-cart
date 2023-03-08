import { GET_PRODUCT_ERROR, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./Product.actionType"

const initialValue = {
    productData:[],
    isLoading:false,
    isError:false
}
export const productReducer = (state=initialValue,{type,payload})=>{
    switch(type){
        case GET_PRODUCT_SUCCESS:{
            return{...state,isLoading:false,productData:payload}
        }
        case GET_PRODUCT_ERROR:{
            return{...state,isLoading:false,isError:true}
        }
        case GET_PRODUCT_REQUEST:{
            return{...state,isLoading:true}
        }
        default:{
            return state
        }
    }
}