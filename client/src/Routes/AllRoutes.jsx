import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './../Pages/Home/Home';
import Category from './../Pages/Category/Category';
import SingleProduct from './../Pages/SingleProduct/SingleProduct';

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:id' element={<Category />} />
        <Route path='/product/:id' element={<SingleProduct />} />
    </Routes>
    </>
  )
}

export default AllRoutes