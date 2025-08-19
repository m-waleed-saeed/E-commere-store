import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import MyAccount from './MyAccount'

const Frontend = () => {
    return (
        <>
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/myaccount' element={<MyAccount />} />
                </Routes>
            </main>
        </>
    )
}

export default Frontend