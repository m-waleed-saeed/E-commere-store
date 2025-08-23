import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import Products from './Products';

const DashboardRoutes = () => {
  return (
    <Routes>
        <Route path='/home' element={<Home/> }/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/products' element={<Products/>}/>
    </Routes>
  );
};

export default DashboardRoutes;