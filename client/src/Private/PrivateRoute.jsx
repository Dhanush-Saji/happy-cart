import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

const PrivateRoute = ({children}) => {
    const data = useSelector((store)=>store.user.user)
    if(data){
        return children
    }else{
        return <Navigate to='/login' />
    }
}

export default PrivateRoute