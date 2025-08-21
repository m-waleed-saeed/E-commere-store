import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import MyAccount from './MyAccount'
import ProductInfo from './ProductInfo'
import ProductList from './ProductList'
import Order from './Order'

const Frontend = () => {
    return (
        <>
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/myaccount' element={<MyAccount />} />
                    <Route path='/product/:productId' element={<ProductInfo />} />
                    <Route path='/products/:searchterm' element={<ProductList />} />
                    <Route path='/myorders' element={<Order />} />
                </Routes>
            </main>
        </>
    )
}

export default Frontend