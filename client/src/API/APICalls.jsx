
import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


export const getCategoryItems = createAsyncThunk('category/getCategoryItems', async() => {
    try {
        let response = await axios.get(`${process.env.REACT_APP_BACKENDAPI}category/find`)
            return response.data
    } catch (error) {
        console.log(error)
    }
  });
export const getUserOrders = createAsyncThunk('userOrders/getUserOrders', async(id) => {
    try {
        let response = await axios.get(`${process.env.REACT_APP_BACKENDAPI}orders/find/${id}`)
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
export const registerUser = createAsyncThunk('auth/registerUser', async(payload) => {
    try {
            let response = new Promise((resolve, reject) =>{
                axios.post(`${process.env.REACT_APP_BACKENDAPI}user/register`,payload).then((res)=>{
                    setTimeout(()=>resolve(res.data),2000)
                    
                }).catch((err)=>{
                    setTimeout(()=>reject(err),2000)
                    
                })
            })
            toast.promise(
                response,
                {
                  pending: 'Hm..Let me check',
                  success: `Hooray! 🎉 `,
                  error:{
                    render({data:{response:{data:{error}}}}){
                        return `Oppss....🤯${error}`
                    }
                  }
                }
            )
            return response
    } catch (error) {
        throw error
    }
  });
export const loginUser = createAsyncThunk('auth/loginUser', async(payload) => {
    try {
            let response = new Promise((resolve, reject) =>{
                axios.post(`${process.env.REACT_APP_BACKENDAPI}user/login`,payload).then((res)=>{
                    setTimeout(()=>resolve(res.data),2000)
                    
                }).catch((err)=>{
                    setTimeout(()=>reject(err),2000)
                    
                })
            })
            toast.promise(
                response,
                {
                  pending: 'Hm..Let me check',
                  success: 'Welcome back! 🎉',
                  error:{
                    render({data:{response}}){
                        return `Oppss....🤯${response.data}`
                    }
                  }
                }
            )
            return response
    } catch (error) {
        throw error
    }
  });
export const getSearchProductFnApi = async(params) =>{
    try {
        let response = await axios.get(`${process.env.REACT_APP_BACKENDAPI}product/find`,{params})
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
export const serverCartUpdate = async(userId,payload)=>{
    
    try {
        await axios.post(`${process.env.REACT_APP_BACKENDAPI}cart/${userId}`,payload)
    } catch (error) {
        console.log(error)
    }
}
export const checkoutStripe = async(payload)=>{
    
    try {
        await axios.post(`${process.env.REACT_APP_BACKENDAPI}stripe/create-checkout-session`,payload).then((res)=>{
            if(res.data.url){
                window.location.href = res.data.url
            }
        }).catch((err)=>console.log(err.message))
    } catch (error) {
        console.log(error)
    }
}