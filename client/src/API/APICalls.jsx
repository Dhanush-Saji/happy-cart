import { loginAdminError, loginAdminRequest, loginAdminSuccess, registerAdminError, registerAdminRequest, registerAdminSuccess } from "../Redux/AuthReducer/Auth.action"
import axios from 'axios'
import {  getCategoryError, getCategoryRequest, getCategorySuccess } from "../Redux/CategoryReducer/Category.action";
import {getProductError, getProductRequest, getProductSuccess } from "../Redux/ProductRedcuer/Product.action";
import { getPopularProductError, getPopularProductRequest, getPopularProductSuccess } from "../Redux/PopularReducer/PopularProduct.action";

export const loginFnApi = (payload) =>async(dispatch)=>{
    try {
        dispatch(loginAdminRequest())
        let response = new Promise((resolve, reject) =>{
            axios.post(`${process.env.REACT_APP_BACKENDAPI}user/login`,payload).then((res)=>{
                const dataSolve = () =>{
                    
                    dispatch(loginAdminSuccess(res.data))
                }
                setTimeout(()=>resolve(res.data),2000)
                setTimeout(dataSolve,3000)
                
            }).catch((err)=>{
                setTimeout(()=>reject(err),2000)
                
            })
        })
        
    } catch (error) {
        console.log(error)
        dispatch(loginAdminError())
        
    }
}
export const registerFnApi = (payload) =>async(dispatch)=>{
    try {
        dispatch(registerAdminRequest())
        let response = new Promise((resolve, reject) =>{
            axios.post(`${process.env.REACT_APP_BACKENDAPI}user/register`,payload).then((res)=>{
                const dataSolve = () =>{
                    
                    dispatch(registerAdminSuccess(res.data))
                }
                setTimeout(()=>resolve(res.data),2000)
                setTimeout(dataSolve,3000)
                
            }).catch((err)=>{
                setTimeout(()=>reject(err),2000)
                
            })
        })
        
    } catch (error) {
        console.log(error)
        dispatch(registerAdminError())
    }
}
export const getCategoryFnApi = () =>async(dispatch)=>{
    try {
        dispatch(getCategoryRequest())
        axios.get(`${process.env.REACT_APP_BACKENDAPI}category/find`).then((res)=>{
            dispatch(getCategorySuccess(res.data))
        })
    } catch (error) {
        console.log(error)
        dispatch(getCategoryError())
    }
}
export const getProductsFnApi = (params) =>async(dispatch)=>{
    try {
        dispatch(getProductRequest())
        axios.get(`${process.env.REACT_APP_BACKENDAPI}product/find`,{params}).then((res)=>{
            const delayData = () =>{
                dispatch(getProductSuccess(res.data))
            }
            setTimeout(delayData,500)
        }).catch((err)=>{
            console.log(err)
        })
    } catch (error) {
        console.log(error)
        dispatch(getProductError())
    }
}
export const getPopularProductFnApi = () => async(dispatch)=>{
    try {
        dispatch(getPopularProductRequest())
        axios.get(`${process.env.REACT_APP_BACKENDAPI}product/popular`).then((res)=>{
            dispatch(getPopularProductSuccess(res.data))
        }).catch((err)=>{
            console.log(err)
            dispatch(getPopularProductError())
        })
    } catch (error) {
        console.log(error)
            dispatch(getPopularProductError())
    }
}
export const getSingleProductFnApi = async(id) =>{
    try {
        let response = await axios.get(`${process.env.REACT_APP_BACKENDAPI}product/find/${id}`)
        // console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
            return
    }
}