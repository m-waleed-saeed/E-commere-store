import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

const Home = () => {
  return (
    <div className='flex justify-between min-h-screen p-6 bg-[#F8F4EA]'>
      {/* Left Section */}
      <div className='flex flex-col w-2/3 mr-6'>
        {/* Stats Cards */}
        <div className="flex">
          <div className="bg-white h-52 w-60 m-4 shadow-lg rounded-xl flex flex-col items-center border border-[#9CB098]">
            <div className="h-32 w-32 m-5 border-[10px] border-[#ff3333] rounded-full flex items-center justify-center">
              <h2 className='font-bold text-2xl text-black'>699</h2>
            </div>
            <h2 className='font-semibold text-xl text-black font-playfair'>Orders</h2>
          </div>
          <div className="bg-white h-52 w-60 m-4 shadow-lg rounded-xl flex flex-col items-center border border-[#9CB098]">
            <div className="h-32 w-32 m-5 border-[10px] border-[#D4B14A] rounded-full flex items-center justify-center">
              <h2 className='font-bold text-2xl text-black'>100</h2>
            </div>
            <h2 className='font-semibold text-xl text-black font-playfair'>Products</h2>
          </div>
          <div className="bg-white h-52 w-60 m-4 shadow-lg rounded-xl flex flex-col items-center border border-[#9CB098]">
            <div className="h-32 w-32 m-5 border-[10px] border-[#9CB098] rounded-full flex items-center justify-center">
              <h2 className='font-bold text-2xl text-black'>200</h2>
            </div>
            <h2 className='font-semibold text-xl text-black font-playfair'>Users</h2>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white m-4 p-6 rounded-xl shadow-lg border border-[#9CB098]">
          <div className="bg-white rounded-md">
            <h3 className="text-xl font-bold mb-4 text-black font-playfair">Latest Transactions</h3>
            <table className='min-w-full table-auto'>
              <thead>
                <tr className='bg-gray-100'>
                  <th className='py-3 px-4 text-left font-montserrat font-medium text-black'>Customer</th>
                  <th className='py-3 px-4 text-left font-montserrat font-medium text-black'>Amount</th>
                  <th className='py-3 px-4 text-left font-montserrat font-medium text-black'>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-[#9CB098] hover:bg-gray-50 transition-colors'>
                  <td className='py-3 px-4 font-montserrat text-black'>Waleed</td>
                  <td className='py-3 px-4 font-montserrat text-black'>$ 200</td>
                  <td className='py-3 px-4 font-montserrat text-green-600 font-semibold'>Approve</td>
                </tr>
                <tr className='border-b border-[#9CB098] hover:bg-gray-50 transition-colors'>
                  <td className='py-3 px-4 font-montserrat text-black'>Mahad</td>
                  <td className='py-3 px-4 font-montserrat text-black'>$ 200</td>
                  <td className='py-3 px-4 font-montserrat text-[#ff3333] font-semibold'>Pending</td>
                </tr>
                <tr className='border-b border-[#9CB098] hover:bg-gray-50 transition-colors'>
                  <td className='py-3 px-4 font-montserrat text-black'>Ahmad</td>
                  <td className='py-3 px-4 font-montserrat text-black'>$ 400</td>
                  <td className='py-3 px-4 font-montserrat text-green-600 font-semibold'>Approve</td>
                </tr>
                <tr className='border-b border-[#9CB098] hover:bg-gray-50 transition-colors'>
                  <td className='py-3 px-4 font-montserrat text-black'>Jhon Doe</td>
                  <td className='py-3 px-4 font-montserrat text-black'>$ 200</td>
                  <td className='py-3 px-4 font-montserrat text-[#ff3333] font-semibold'>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className='flex flex-col w-1/3 bg-white p-6 shadow-lg rounded-xl border border-[#9CB098]'>
        <div className="p-5 mb-5 rounded-xl flex flex-col items-center bg-gradient-to-r from-[#ff3333]/10 to-[#D4B14A]/10 border border-[#9CB098]">
          <h2 className="font-playfair font-semibold text-black">Total Revenue: $200,000</h2>
        </div>
        <div className="p-5 mb-5 rounded-xl flex flex-col items-center bg-gradient-to-r from-[#9CB098]/10 to-[#D4B14A]/10 border border-[#9CB098]">
          <h2 className="font-playfair font-semibold text-black">Total Losses: $0</h2>
        </div>
        <div className="border border-[#9CB098] rounded-xl">
          <LineChart
            xAxis={[{ data: [0, 1, 2, 3, 5, 8, 10] }]}
            series={[{
              data: [2, 5.5, 2, 9.1, 1, 7],
              color: '#ff3333'
            }]}
            height={300}
            grid={{ vertical: true, horizontal: true }}
          />
        </div>
      </div>
    </div>
  )
}

export default Home