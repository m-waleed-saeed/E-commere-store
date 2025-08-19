import React from 'react'
import StarRatings from 'react-star-ratings'

const SingleProduct = () => {
    return (
        <div className='felx felx-wrap mx-[30px]'>

            <div className='flex flex-col items-center justify-center h-[500px]  m-[10px] cursor-pointer'>
                <img src="/serum1.jpg" alt="Product Image" className='h-[400px] w-[300px] bg-cover' />
                <h2 className='font-semibold text-[18px] w-[300px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga pariatur aliquam.</h2>
                <span className='font-semibold text-[18px] flex items-center justify-center'>$100</span>
                <span className='felx items-center'><StarRatings rating={3.63} starDimension='25px' starRatedColor='red' starSpacing='5px' />(2)</span>
            </div>

        </div>
    )
}

export default SingleProduct