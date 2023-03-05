import { loginAdminError, loginAdminRequest, loginAdminSuccess, registerAdminError, registerAdminRequest, registerAdminSuccess } from "../Redux/AuthReducer/Auth.action"
import axios from 'axios'
import { ToastContainer, toast, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategoryError, addCategoryRequest, addCategorySuccess, getCategoryRequest } from "../Redux/CartReducer/Category.action";

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
        toast.promise(
            response,
            {
              pending: 'Hm..Let me check',
              success: `Hooray! 🎉 You're officially part of the gang!`,
              error:{
                render({data:{response:{data:{error}}}}){
                    return `Oppss....🤯${error}`
                }
              }
            }
        )
        
    } catch (error) {
        console.log(error)
        dispatch(registerAdminError())
    }
}
export const getCartFnApi = (firstTime) =>async(dispatch)=>{
    try {
        dispatch(getCategoryRequest())
        let response = new Promise((resolve, reject) =>{
            axios.get(`${process.env.REACT_APP_BACKENDAPI}category/find`).then((res)=>{
                const dataSolve = () =>{
                    
                    dispatch(addCategorySuccess(res.data))
                }
                setTimeout(()=>resolve(res.data),1000)
                setTimeout(dataSolve,2000)
                
            }).catch((err)=>{
                setTimeout(()=>reject(err),2000)
                
            })
        })
        firstTime && toast.promise(
            response,
            {
              pending: 'Let me get the category data',
              success: `Got the categories! 🎉 `,
              error:{
                render({data:{response:{data:{error}}}}){
                    return `Oppss....🤯${error}`
                }
              }
            }
        )
    } catch (error) {
        console.log(error)
        dispatch(addCategoryError())
    }
}
export const addCartFnApi = (payload) =>async(dispatch)=>{
    try {
        dispatch(addCategoryRequest())
        let response = new Promise((resolve, reject) =>{
            axios.post(`${process.env.REACT_APP_BACKENDAPI}category`,payload).then((res)=>{
                let firstTime = true
                const dataSolve = () =>{
                    
                    dispatch(getCartFnApi(firstTime))
                }
                setTimeout(()=>resolve(res.data),1000)
                setTimeout(dataSolve,1000)
                
            }).catch((err)=>{
                setTimeout(()=>reject(err),2000)
                
            })
        })
        toast.promise(
            response,
            {
              pending: 'Hm..Let me check',
              success: `hoorayy category added! 🎉 `,
              error:{
                render({data:{response:{data:{error}}}}){
                    return `Oppss....🤯${error}`
                }
              }
            }
        )
        
    } catch (error) {
        console.log(error)
        dispatch(addCategoryError())
        
    }
}