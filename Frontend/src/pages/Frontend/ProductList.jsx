import React from 'react'
import Products from '../../components/Products'

const ProductList = () => {
  return (
    <div className='min-h-screen bg-[#F8F4EA] p-2 font-["Montserrat"]'>

      <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 p-6 bg-white rounded-xl shadow-md'>
        {/* Left - Filters */}
        <div className='flex flex-col sm:flex-row sm:items-center gap-4 mb-6 lg:mb-0'>
          <span className='font-semibold text-black'>Filter Products</span>
          <select name="concern" id="" className='p-3 border border-[#9CB098] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3333] focus:border-transparent'>
            <option disabled selected>
              Concern
            </option>
            <option>Dry Skin</option>
            <option>Pigmentation</option>
            <option>Oil Control</option>
            <option>Anti Acne</option>
            <option>Sunburn</option>
            <option>Skin Brightening</option>
            <option>Tan Removal</option>
            <option>Night Routine</option>
            <option>UV Protection</option>
            <option>Damaged Hair</option>
            <option>Frizzy Hair</option>
            <option>Stretch Marks</option>
            <option>Color Protection</option>
            <option>Dry Hair</option>
            <option>Soothing</option>
            <option>Dandruff</option>
            <option>Greying</option>
            <option>Hairfall</option>
            <option>Hair Color</option>
            <option>Well Being</option>
            <option>Acne</option>
            <option>Hair Growth</option>
          </select>
          <select
            name="brand"
            className="p-3 border border-[#9CB098] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3333] focus:border-transparent">
            <option disabled selected>
              Popular Brands
            </option>
            <option>Garnier</option>
            <option>Kylie</option>
            <option>Kiss Beauty</option>
            <option>Dr Rashel</option>
            <option>Luron</option>
            <option>Nivea</option>
            <option>Heaven Dove</option>
            <option>Disaar</option>
            <option>Johnsons Baby</option>
            <option>Rexona</option>
            <option>Kylie</option>
          </select>
          <select
            name="skintype"
            className="p-3 border border-[#9CB098] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3333] focus:border-transparent">
            <option disabled selected>
              Skin type
            </option>
            <option>All</option>
            <option>Oily</option>
            <option>Dry</option>
            <option>Sensitive</option>
            <option>Normal</option>
          </select>
        </div>

        {/* Right - Sort */}
        <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
          <span className='font-semibold text-black'>Sort Products</span>
          <select className="p-3 border border-[#9CB098] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff3333] focus:border-transparent">
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>

      <Products/>

    </div>
  )
}

export default ProductList