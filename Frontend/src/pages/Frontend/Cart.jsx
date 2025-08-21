import React from 'react'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

const Cart = () => {
  return (
    <div className='min-h-screen bg-[#F8F4EA] p-8 font-["Montserrat"]'>
      <div className='max-w-6xl mx-auto'>
        <h3 className='text-3xl font-serif font-semibold text-black mb-8'>Shopping Cart</h3>

        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Left Side */}
          <div className='flex-1 bg-white shadow-md rounded-xl p-6'>
            <h3 className='text-xl font-serif font-semibold text-black mb-6'>Your Items</h3>

            <div className='flex flex-col space-y-6'>
              <div className='flex flex-col sm:flex-row items-start border-b border-[#9CB098] pb-6'>
                <img src="/lotion1.jpg" alt="" className='w-full sm:w-32 h-32 object-cover rounded-md mb-4 sm:mb-0 sm:mr-6' />

                <div className='flex-1 sm:mr-4'>
                  <h3 className='font-serif font-semibold text-black text-lg mb-2'>Almond Oil</h3>
                  <p className='text-gray-700 text-sm mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi omnis libero eveniet aliquid necessitatibus ratione sunt sint ad autem soluta vitae adipisci, quod harum accusamus error aperiam placeat numquam. Blanditiis!</p>
                  <div className="flex items-center">
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <FaMinus className="text-sm" />
                    </button>
                    <span className="mx-4 w-8 text-center font-semibold">1</span>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <FaPlus className="text-sm" />
                    </button>
                  </div>
                </div>

                <div className='flex flex-col items-end mt-4 sm:mt-0'>
                  <p className='text-lg font-semibold text-[#ff3333] mb-6'>$90</p>
                  <button className="text-gray-500 hover:text-[#ff3333] transition-colors">
                    <FaTrash />
                  </button>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row items-start border-b border-[#9CB098] pb-6'>
                <img src="/lotion.jpg" alt="" className='w-full sm:w-32 h-32 object-cover rounded-md mb-4 sm:mb-0 sm:mr-6' />

                <div className='flex-1 sm:mr-4'>
                  <h3 className='font-serif font-semibold text-black text-lg mb-2'>Almond Oil</h3>
                  <p className='text-gray-700 text-sm mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi omnis libero eveniet aliquid necessitatibus ratione sunt sint ad autem soluta vitae adipisci, quod harum accusamus error aperiam placeat numquam. Blanditiis!</p>
                  <div className="flex items-center">
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <FaMinus className="text-sm" />
                    </button>
                    <span className="mx-4 w-8 text-center font-semibold">1</span>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <FaPlus className="text-sm" />
                    </button>
                  </div>
                </div>

                <div className='flex flex-col items-end mt-4 sm:mt-0'>
                  <p className='text-lg font-semibold text-[#ff3333] mb-6'>$90</p>
                  <button className="text-gray-500 hover:text-[#ff3333] transition-colors">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>

            <button className='mt-6 text-[#ff3333] font-medium hover:underline'>Clear Cart</button>
          </div>

          {/* Right Side */}
          <div className='w-full lg:w-80 bg-white shadow-md rounded-xl p-6 h-fit'>
            <h2 className='font-serif font-semibold text-black text-xl mb-6'>Order Summary</h2>

            <div className='flex flex-col space-y-4 mb-6'>
              <div className='flex justify-between'>
                <span className='text-gray-700'>Subtotal</span>
                <span className='font-semibold'>$490</span>
              </div>

              <div className='flex justify-between'>
                <span className='text-gray-700'>Shipping</span>
                <span className='font-semibold'>$10</span>
              </div>

              <div className='flex justify-between'>
                <span className='font-semibold'>Total</span>
                <span className='font-semibold text-[#ff3333]'>$500</span>
              </div>
            </div>

            <button className='w-full bg-[#ff3333] text-white font-semibold py-3 px-6 rounded-md hover:-translate-y-0.5 transition-transform'>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;