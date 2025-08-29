import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className='flex justify-beteen m-[10%]'>
      {/* Left */}
      <div className='mr-[50px]'>
        <h2>Active Banners</h2>
        <div className='flex flex-col spece-y-4'>
          <div className='flex items-center justify-between border-b pb-4'>
            <img src="/lotion1.jpg" alt="" className='w-32 h-32 object-cover rounded-md ' />
            <div className="flex-1 ml-4">
              <h3>Radiate Beauty, Inside and out.</h3>
              <p>Discover your perfect product for a Flawless Look.</p>
            </div>
            <button className='bg-red-600 p-1'>Delete</button>
          </div>
        </div>
        <div className='flex flex-col spece-y-4'>
          <div className='flex items-center justify-between border-b pb-4'>
            <img src="/lotion1.jpg" alt="" className='w-32 h-32 object-cover rounded-md ' />
            <div className="flex-1 ml-4">
              <h3>Radiate Beauty, Inside and out.</h3>
              <p>Discover your perfect product for a Flawless Look.</p>
            </div>
            <button className='bg-red-600 p-1'>Delete</button>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-col">

        <div className="flex-1 bg-white p-5">

          <div className="flex flex-col">
            <div className="border-2 h-[100px] w-[100px] border-[#444] border-solid rounded-md ">
              <div className="flex items-center justify-center mt-[40px]">
                <label htmlFor="" className='cursor-pointer'>
                  <FaPlus />
                </label>
              </div>
            </div>
            <div className='flex flex-col my-3'>
              <span>Title:</span>
              <input type="text" className='w-[250px] outline-none border-b-2 border-[#444] border-solid' />
            </div>
            <div className='flex flex-col my-3'>
              <span>Subtitle:</span>
              <input type="text" className='w-[250px] outline-none border-b-2 border-[#444] border-solid' />
            </div>
            <button className='bg-green-600'>Upload</button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Banner