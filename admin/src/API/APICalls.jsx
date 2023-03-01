import { loginAdminError, loginAdminRequest, loginAdminSuccess, registerAdminError, registerAdminRequest, registerAdminSuccess } from "../Redux/AuthReducer/Auth.action"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const loginFnApi = (payload) =>async(dispatch)=>{
    // console.log(process.env.REACT_APP_BACKENDAPI)
    try {
        dispatch(loginAdminRequest())
        axios.post(`${process.env.REACT_APP_BACKENDAPI}user/login`,payload).then((res)=>{
            const triggerDispatch = () =>{
                dispatch(loginAdminSuccess(res.data))
            }
            toast.success(`Welcome back! 🎉 `, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                });
                setTimeout(triggerDispatch,1500)
            
        }).catch((err)=>{
            toast.error(`Oppss....${err.response.data}`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
                });
        })
        
    } catch (error) {
        console.log(error)
        dispatch(loginAdminError())
        
    }
}
export const registerFnApi = (payload) =>async(dispatch)=>{
    // console.log(process.env.REACT_APP_BACKENDAPI)
    try {
        dispatch(registerAdminRequest())
        axios.post(`${process.env.REACT_APP_BACKENDAPI}user/register`,payload).then((res)=>{
            const triggerDispatch = () =>{
                dispatch(loginAdminSuccess(res.data))
            }
            toast.success(`Hooray! 🎉 You're officially part of the gang!`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                });
            setTimeout(triggerDispatch,1500)
            dispatch(registerAdminSuccess(res.data))
        }).catch((err)=>{
            toast.error(`Oppss....${err.response.data}`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
                });
        })
        
    } catch (error) {
        console.log(error)
        dispatch(registerAdminError())
    }
}