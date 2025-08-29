import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../redux/apiCall'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const initialState = { email: '', password: '' }

const Login = () => {
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleChange = e => setState(prev => ({ ...prev, [e.target.name]: e.target.value }))

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            setLoading(true);
            await login(dispatch, state);
            console.log(user.currentUser)
            setLoading(false)
            navigate('/')
        } catch (error) {
            if (error.response && error.response.data.message) {
                toast.error(error.response.data.message)
            } else {
                toast.error('An unexpected error occurred. Please try again.')
            }
        }
    }

    return (
        <div className="min-h-screen bg-[#F8F4EA] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-['Montserrat']">
            <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-2xl overflow-hidden max-w-4xl w-full">
                {/* Image Section */}
                <div className='md:w-1/2 h-64 md:h-auto transition-transform duration-700 ease-in-out hover:scale-105 overflow-hidden'>
                    <img
                        src="/lotion1.jpg"
                        alt="login"
                        className='object-cover h-full w-full'
                    />
                </div>

                {/* Form Section */}
                <div className='p-8 md:p-12 md:w-1/2 flex flex-col justify-center'>
                    <h2 className="text-3xl font-serif font-semibold text-black mb-2">Welcome Back</h2>
                    <p className="text-gray-600 mb-8">Sign in to your account</p>

                    <form className='space-y-6'>
                        <div>
                            <label htmlFor="email" className='block text-sm font-medium text-black mb-2'>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder='Enter your email'
                                onChange={handleChange}
                                value={state.email}
                                className="w-full px-4 py-3 border border-[#9CB098] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3333] focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className='block text-sm font-medium text-black mb-2'>Password</label>
                            <input
                                type="password"
                                placeholder='Enter your password'
                                id="password"
                                name="password"
                                onChange={handleChange}
                                value={state.password}
                                className="w-full px-4 py-3 border border-[#9CB098] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3333] focus:border-transparent"
                            />
                        </div>

                        <button onClick={handleLogin}  className="w-full bg-[#ff3333] text-white font-semibold py-3 px-6 rounded-md hover:-translate-y-0.5 transition-transform">
                            {loading ? 'loading...' : 'Login'}
                        </button>

                        <div className="text-center text-sm text-gray-600">
                            <span>Don't have an account? </span>
                            <Link
                                to='/auth/register'
                                className="font-medium text-[#ff3333] hover:text-[#D4B14A] transition-colors"
                            >
                                Register
                            </Link>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    )
}

export default Login