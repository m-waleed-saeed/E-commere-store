import React from "react";
// import React, { useState } from 'react';
import { FaStar, FaRegStar, FaMinus, FaPlus, FaStarHalfAlt, FaShoppingCart } from "react-icons/fa";

const ProductInfo = ({ rating = 3.7 }) => {
  // const [quantity, setQuantity] = useState(1);
  
  // const incrementQuantity = () => setQuantity(prev => prev + 1);
  // const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
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
  };

  return (
    <div className="min-h-screen bg-[#F8F4EA] py-8 px-4 sm:px-6 lg:px-8 font-['Montserrat']">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row p-6 lg:p-8">
          {/* Left Side - Product Image */}
          <div className="lg:flex-1 mb-8 lg:mb-0 lg:mr-10">
            <div className="h-64 sm:h-80 lg:h-[500px] rounded-xl overflow-hidden shadow-md">
              <img 
                src="/lotion.jpg" 
                alt="Bajaj Almond Lotion" 
                className="h-full w-full object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex mt-4 space-x-4 overflow-x-auto py-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex-shrink-0 h-16 w-16 sm:h-20 sm:w-20 border border-[#9CB098] rounded-md overflow-hidden cursor-pointer hover:border-[#ff3333] transition-colors">
                  <img 
                    src="/lotion.jpg" 
                    alt={`Bajaj Almond Lotion ${item}`} 
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Product Details */}
          <div className="lg:flex-1">
            <h2 className='text-2xl sm:text-3xl font-serif font-semibold text-black mb-4'>Bajaj Almond Lotion</h2>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center gap-1">
                {renderStars()}
              </div>
              <span className="text-sm text-gray-600 ml-2">(42 reviews)</span>
            </div>
            
            <p className='text-gray-700 mb-6 leading-relaxed'>
              Luxurious almond-infused lotion for silky smooth skin. Enriched with vitamin E and natural 
              emollients to deeply nourish and hydrate your skin. Perfect for daily use with a delicate 
              fragrance that lingers throughout the day.
            </p>
            
            <div className="flex items-baseline mb-6">
              <span className='text-2xl font-semibold text-[#ff3333]'>$90.00</span>
              <span className='text-sm text-gray-500 line-through ml-2'>$105.00</span>
              <span className='text-sm bg-[#ff3333] text-white font-semibold px-2 py-1 rounded ml-4'>15% OFF</span>
            </div>
            
            {/* What's in the Box */}
            <div className="border-2 border-[#9CB098] rounded-xl shadow-sm mb-6 p-4 sm:p-6">
              <h3 className="font-serif font-semibold text-lg text-black mb-3 flex items-center">
                What's in the Box?
              </h3>
              <hr className='border-[#9CB098] mb-4' />
              <ul className="list-disc pl-5 text-gray-700">
                <li>1 x Garnier Even & Matte vitamin C cleansing foam 500ml</li>
                <li>1 x Free travel-sized almond lotion (50ml)</li>
                <li>1 x Premium applicator sponge</li>
              </ul>
            </div>
            
            {/* Wholesale Offer */}
            <div className="bg-[#F8F4EA] p-4 rounded-lg mb-6">
              <div className="flex items-center">
                <span className="text-[#D4B14A] font-semibold mr-2">✨</span>
                <span className="text-sm text-black">
                  <span className="font-semibold">Wholesale Available:</span> $70.00 for 10+ items
                </span>
              </div>
            </div>
            
            {/* Quantity Selector */}
            <div className="mb-6">
              <p className="text-sm font-medium text-black mb-2">Quantity:</p>
              <div className="flex items-center">
                <button 
                  // onClick={decrementQuantity}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <FaMinus className="text-sm" />
                </button>
                <span className="mx-4 w-8 text-center font-semibold">1</span>
                {/* <span className="mx-4 w-8 text-center font-semibold">{quantity}</span> */}
                <button 
                  // onClick={incrementQuantity}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <FaPlus className="text-sm" />
                </button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <button className="w-full bg-[#ff3333] text-white font-semibold py-3 px-6 rounded-md flex items-center justify-center transition-transform hover:-translate-y-0.5 mb-6">
              <FaShoppingCart className="mr-2" />
              Add to Cart - ${(90).toFixed(2)}
              {/* Add to Cart - ${(90 * quantity).toFixed(2)} */}
            </button>
            
            <hr className='my-6 border-[#9CB098]'/>
            
            {/* Reviews Section */}
            <div>
              <h3 className="font-serif font-semibold text-xl text-black mb-4">Customer Reviews</h3>
              
              <div className="space-y-6">
                {/* Review 1 */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-1 mb-2">
                    {renderStars()}
                    <span className="font-medium text-black ml-2">Mahad</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    This lotion transformed my skincare routine! My skin feels incredibly soft and 
                    hydrated all day long. The almond scent is subtle but luxurious.
                  </p>
                </div>
                
                {/* Review 2 */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-1 mb-2">
                    {renderStars()}
                    <span className="font-medium text-black ml-2">Waleed</span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    I've been using this for three weeks now and already notice my skin is more even 
                    and moisturized. Will definitely repurchase!
                  </p>
                </div>
              </div>
              
              {/* <button className="mt-4 text-[#ff3333] font-medium text-sm hover:underline">
                View all 42 reviews
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInfo