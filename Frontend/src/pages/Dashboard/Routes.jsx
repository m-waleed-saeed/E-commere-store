import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import Products from './Products';
import Orders from './Orders';
import Banners from './Banners';
import AddProduct from './Products/AddProduct';
import UpdateProduct from './Products/UpdateProduct';

const DashboardRoutes = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home/> }/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/add-product' element={<AddProduct/>}/>
        <Route path='/update-product/:id' element={<UpdateProduct/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/banners' element={<Banners/>}/>
    </Routes>
  );
};

export default DashboardRoutes;