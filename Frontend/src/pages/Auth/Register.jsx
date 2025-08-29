import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userRequest from '../../requestMethods'
import { toast } from 'react-toastify'

const initialState = { name: '', email: '', password: '' }

const Register = () => {
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleChange = e => setState(prev => ({ ...prev, [e.target.name]: e.target.value }))

    const handleRegister = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            await userRequest.post('/auth/register', state)
            toast.success('Registration successful! Please login.')
            navigate('/auth/login')
        } catch (error) {
            if (error.response && error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error('An unexpected error occurred. Please try again.')
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-[#F8F4EA] p-4 font-["Montserrat"]'>
            <div className='flex bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl w-full'>
                {/* Image */}
                <div className='hidden md:block md:w-1/2 h-auto transition-transform duration-700 ease-in-out hover:scale-105'>
                    <img 
                        src="/lotion1.jpg" 
                        alt="Register" 
                        className='object-cover h-full w-full' 
                    />
                </div>

                {/* Form */}
                <div className='p-8 md:p-12 md:w-1/2'>
                    <h2 className='text-3xl font-serif font-semibold text-black mb-6'>Create Account</h2>

                    <form className='space-y-6' onSubmit={handleRegister}>
                        <div>
                            <label htmlFor="name" className='block text-sm font-medium text-black mb-2'>
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder='John Doe'
                                value={state.name}
                                onChange={handleChange}
                                className='w-full px-4 py-3 border border-[#9CB098] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3333] focus:border-transparent'
                                required
                                disabled={loading}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className='block text-sm font-medium text-black mb-2'>
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder='example@example.com'
                                value={state.email}
                                onChange={handleChange}
                                className='w-full px-4 py-3 border border-[#9CB098] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3333] focus:border-transparent'
                                required
                                disabled={loading}
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="password" className='block text-sm font-medium text-black mb-2'>
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder='********'
                                value={state.password}
                                onChange={handleChange}
                                className='w-full px-4 py-3 border border-[#9CB098] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3333] focus:border-transparent'
                                required
                                disabled={loading}
                                minLength={6}
                            />
                        </div>
                        
                        <button
                            type="submit"
                            disabled={loading}
                            className='w-full bg-[#ff3333] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#e62e2e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            {loading ? 'Creating Account...' : 'Register'}
                        </button>
                        
                        <div className='text-center text-sm text-gray-600'>
                            <span>Already have an account? </span>
                            <Link 
                                to='/auth/login' 
                                className='font-medium text-[#ff3333] hover:text-[#D4B14A] transition-colors'
                            >
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register