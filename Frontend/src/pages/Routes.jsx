import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
import Dashboard from './Dashboard'
import Header from '../components/Header'
import Footer from '../components/Footer'

const index = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/*' element={<Frontend />} />
                <Route path='auth/*' element={<Auth />} />
                <Route path="dashboard/*" element={<Dashboard />} />
            </Routes>
            <Footer />
        </>
    )
}

export default index