
import { GET_CATEGORY_REQUEST } from '../CategoryReducer/Category.actionType';
import { ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from './Product.actionType';


const initialValue = {
    productData:[],
    isLoading:false,
    isError:false
}
export const productReducer = (state=initialValue,{type,payload})=>{
    switch(type){
        case ADD_PRODUCT_REQUEST:{
            return{...state,isLoading:true}
        }
        case ADD_PRODUCT_SUCCESS:{
            return{...state,isLoading:false,productData:payload}
        }
        case ADD_PRODUCT_ERROR:{
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