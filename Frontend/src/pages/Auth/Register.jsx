import React from 'react'
import {Link} from'react-router-dom'

const Register = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-[#F8F4EA] p-4 font-["Montserrat"]'>

            <div className='flex bg-white shadow-xl rounded-2xl overflow-hidden'>
                {/* Image */}
                <div className='h-[500px] w-[500px] transition-transform duration-700 ease-in-out hover:scale-105'>
                    <img src="/lotion1.jpg" alt="login" className='object-cover h-full w-full' />
                </div>

                {/* Form */}
                <div className='p-10 w-[500px] '>
                    <h2 className='text-3xl font-serif font-semibold text-black mb-6'>Create Account</h2>
                    
                    <form className='space-y-5'>
                        <div>
                            <label htmlFor="" className='block text-sm font-medium text-black mb-2'>Full Name</label>
                            <input type="text" placeholder='Jhon Doe' className='w-full px-4 py-3 border border-[#9CB098] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3333] focus:border-transparent' />
                        </div>
                        <div>
                            <label htmlFor="" className='block text-sm font-medium text-black mb-2'>Email</label>
                            <input type="text" placeholder='Email' className='w-full px-4 py-3 border border-[#9CB098] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3333] focus:border-transparent' />
                        </div>
                        <div>
                            <label htmlFor="" className='block text-sm font-medium text-black mb-2'>Password</label>
                            <input type="text" placeholder='Password' className='w-full px-4 py-3 border border-[#9CB098] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3333] focus:border-transparent' />
                        </div>
                        <button className='w-full bg-[#ff3333] text-white font-semibold py-3 px-6 rounded-md hover:-translate-y-0.5 transition-transform'>Register</button>
                        
                        <div className='text-center text-sm text-gray-600'>
                            <span>Already have an account? </span>
                            <Link to='/auth/login' className='font-medium text-[#ff3333] hover:text-[#D4B14A] transition-colors'>Login</Link>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Register