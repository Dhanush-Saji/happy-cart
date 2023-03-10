import { loginAdminError, loginAdminRequest, loginAdminSuccess, registerAdminError, registerAdminRequest, registerAdminSuccess } from "../Redux/AuthReducer/Auth.action"
import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

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
export const getCategoryItems = createAsyncThunk('category/getCategoryItems', async() => {
    try {
        let response = await axios.get(`${process.env.REACT_APP_BACKENDAPI}category/find`)
            return response.data
    } catch (error) {
        console.log(error)
    }
  });
export const getProducts = createAsyncThunk('products/getProducts', async(params) => {
    try {
        let response = await axios.get(`${process.env.REACT_APP_BACKENDAPI}product/find`,{params})
            return response.data
    } catch (error) {
        console.log(error)
    }
  });
export const getPopularItems = createAsyncThunk('popular/getPopularItems', async() => {
    try {
        let response = await axios.get(`${process.env.REACT_APP_BACKENDAPI}product/popular`)
            return response.data
    } catch (error) {
        console.log(error)
    }
  });
export const getSearchProductFnApi = async(params) =>{
    try {
        let response = await axios.get(`${process.env.REACT_APP_BACKENDAPI}product/find`,{params})
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error)
            return
    }
}
export const getSingleProductFnApi = async(id) =>{
    try {
        let response = await axios.get(`${process.env.REACT_APP_BACKENDAPI}product/find/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
            return
    }
}