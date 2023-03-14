import React from 'react'
import { Route, Routes, Navigate  } from 'react-router-dom'
import Home from './../Pages/Home/Home';
import Category from './../Pages/Category/Category';
import SingleProduct from './../Pages/SingleProduct/SingleProduct';
import Signup from '../Pages/Signup/Signup';
import Login from '../Pages/Login/Login';
import PrivateRoute from '../Private/PrivateRoute';
import CheckoutSuccess from '../Components/CheckoutSuccess/CheckoutSuccess';
import PaymentFailed from '../Components/PaymentFailed/PaymentFailed';
import Orders from '../Pages/Orders/Orders';
import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage';

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Category />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/error' element={<PrivateRoute><PaymentFailed /></PrivateRoute>} />
        <Route path='/myorders' element={<PrivateRoute><Orders /></PrivateRoute>} />
        <Route path='/not-found' element={<NotFoundPage />} />
        <Route path='*' element={<Navigate replace to='/not-found' />} />
        <Route path='/checkout-success' element={<PrivateRoute><CheckoutSuccess /></PrivateRoute>} />
        <Route path='/singleproduct/:id' element={<SingleProduct />} />
    </Routes>
    </>
  )
}

export default AllRoutes