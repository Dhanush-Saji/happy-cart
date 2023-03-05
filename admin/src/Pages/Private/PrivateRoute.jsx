import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate()
  const data = useSelector((store) => store.authReducer.userData) || [];
  if (data.length > 0) {
    return children;
  } else {
    return <Navigate to='/login' />
  }
};

export default PrivateRoute;
