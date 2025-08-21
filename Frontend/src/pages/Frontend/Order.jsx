import React from 'react'
import { FaStar, FaRegStar, FaStarHalfAlt, FaCheckCircle } from 'react-icons/fa'

const Order = ({ rating = 4.5 }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<FaStar key={i} className="text-yellow-500" />);
            } else if (rating >= i - 0.75) {
                stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
            } else {
                stars.push(<FaRegStar key={i} className="text-yellow-500" />);
            }
        }
        return stars;
    }
    return (
        <div className='min-h-screen bg-[#F8F4EA] p-8 font-["Montserrat"]'>
            <div className='max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6'>
                <div className='text-center mb-8'>
                    <FaCheckCircle className='text-green-500 text-5xl mx-auto mb-4' />
                    <h1 className='text-3xl font-serif font-semibold text-black mb-2'>Thank You for Your Order</h1>
                    <p className='text-gray-600'>Here are the details of your recent orders.</p>
                </div>

                <div className='mb-8'>
                    <h2 className='text-xl font-serif font-semibold text-black mb-4'>Order #12345</h2>
                    <div className='space-y-6'>

                        <div className='bg-[#F8F4EA] p-6 rounded-xl border border-[#9CB098]'>
                            <h3 className='font-serif font-semibold text-black mb-4'>Items Ordered</h3>
                            <div className='flex flex-col'>
                                <div className='flex items-center pb-6 mb-6 border-b border-[#9CB098]'>
                                    <img src="/lotion1.jpg" alt="" className='h-24 w-24 rounded-md object-cover' />
                                    <div className='flex-1 ml-6'>
                                        <h4 className='font-semibold text-black'>Markes Grapeseed & Sweet Almond Oil, For Dull Skin</h4>
                                        <p className='text-gray-600'>Quantity: 2</p>
                                    </div>
                                    <div className='text-right'>
                                        <p className='font-semibold text-[#ff3333]'>$90.00</p>
                                    </div>
                                </div>
                                {/* Rating Part */}
                                <div className='flex flex-col'>
                                    <h3 className='font-semibold text-black mb-3'>Rate this product</h3>
                                    <div className="flex items-center gap-1 mb-4">
                                        {renderStars()}
                                    </div>
                                    <textarea 
                                        name="" 
                                        placeholder='Leave a review' 
                                        className='w-full px-4 py-3 border border-[#9CB098] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3333] focus:border-transparent mb-4'
                                        rows="3"
                                    ></textarea>
                                    <button className='bg-[#ff3333] text-white font-semibold py-2 px-6 rounded-md hover:-translate-y-0.5 transition-transform self-end'>Submit Review</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className='bg-[#F8F4EA] p-6 rounded-xl border border-[#9CB098]'>
                            <h3 className='font-serif font-semibold text-black mb-4'>Items Ordered</h3>
                            <div className='flex flex-col'>
                                <div className='flex items-center pb-6 mb-6 border-b border-[#9CB098]'>
                                    <img src="/lotion.jpg" alt="" className='h-24 w-24 rounded-md object-cover' />
                                    <div className='flex-1 ml-6'>
                                        <h4 className='font-semibold text-black'>Markes Grapeseed & Sweet Almond Oil, For Dull Skin</h4>
                                        <p className='text-gray-600'>Quantity: 2</p>
                                    </div>
                                    <div className='text-right'>
                                        <p className='font-semibold text-[#ff3333]'>$90.00</p>
                                    </div>
                                </div>
                                {/* Rating Part */}
                                <div className='flex flex-col'>
                                    <h3 className='font-semibold text-black mb-3'>Rate this product</h3>
                                    <div className="flex items-center gap-1 mb-4">
                                        {renderStars()}
                                    </div>
                                    <textarea 
                                        name="" 
                                        placeholder='Leave a review' 
                                        className='w-full px-4 py-3 border border-[#9CB098] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3333] focus:border-transparent mb-4'
                                        rows="3"
                                    ></textarea>
                                    <button className='bg-[#ff3333] text-white font-semibold py-2 px-6 rounded-md hover:-translate-y-0.5 transition-transform self-end'>Submit Review</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                    <div className='bg-[#F8F4EA] p-6 rounded-xl border border-[#9CB098]'>
                        <h3 className='font-serif font-semibold text-black mb-4'>Shipping Information</h3>
                        <p className='text-gray-700 mb-2'>abc@gmail.com</p>
                        <p className='text-gray-700 mb-2'>+ (123) 456 789</p>
                        <p className='text-gray-700'>Jhon Doe</p>
                    </div>
                    
                    <div className='bg-[#F8F4EA] p-6 rounded-xl border border-[#9CB098]'>
                        <h3 className='font-serif font-semibold text-black mb-4'>Payment Method</h3>
                        <p className='text-gray-700'>VISA •••• •••• •••• 1234</p>
                    </div>
                </div>
                
                <div className='bg-[#F8F4EA] p-6 rounded-xl border border-[#9CB098] mb-8'>
                    <h3 className='font-serif font-semibold text-black mb-4'>Order Summary</h3>
                    <div className='flex justify-between mb-3'>
                        <span className='text-gray-700'>Subtotal:</span>
                        <span className='font-semibold'>$720.00</span>
                    </div>
                    <div className='flex justify-between mb-3'>
                        <span className='text-gray-700'>Shipping:</span>
                        <span className='font-semibold'>$10.00</span>
                    </div>
                    <div className='flex justify-between mb-3 pt-3 border-t border-[#9CB098]'>
                        <span className='text-lg font-semibold'>Total:</span>
                        <span className='text-lg font-semibold text-[#ff3333]'>$730.00</span>
                    </div>
                </div>

                <div className='text-center'>
                    <button className='bg-[#D4B14A] text-black font-semibold py-3 px-8 rounded-md hover:-translate-y-0.5 transition-transform'>Continue Shopping</button>
                </div>
            </div>
        </div>
    )
}

export default Order