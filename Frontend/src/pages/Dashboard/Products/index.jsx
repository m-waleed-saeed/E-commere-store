import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { FaTrash } from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Products = () => {
  const data = [
    {
      "_id": "p001",
      "title": "Wireless Headphones",
      "image": "https://via.placeholder.com/200x200.png?text=Headphones",
      "desc": "High-quality wireless headphones with noise cancellation.",
      "originalPrice": 12000,
      "discountedPrice": 9500,
      "inStock": true
    },
    {
      "_id": "p002",
      "title": "Smart Watch",
      "image": "https://via.placeholder.com/200x200.png?text=Smart+Watch",
      "desc": "Fitness smart watch with heart rate and sleep tracking.",
      "originalPrice": 8000,
      "discountedPrice": 6200,
      "inStock": true
    },
    {
      "_id": "p003",
      "title": "Bluetooth Speaker",
      "image": "https://via.placeholder.com/200x200.png?text=Speaker",
      "desc": "Portable Bluetooth speaker with deep bass.",
      "originalPrice": 6000,
      "discountedPrice": 4500,
      "inStock": false
    },
    {
      "_id": "p004",
      "title": "Wireless Headphones",
      "image": "https://via.placeholder.com/200x200.png?text=Headphones",
      "desc": "High-quality wireless headphones with noise cancellation.",
      "originalPrice": 12000,
      "discountedPrice": 9500,
      "inStock": true
    },
    {
      "_id": "p005",
      "title": "Smart Watch",
      "image": "https://via.placeholder.com/200x200.png?text=Smart+Watch",
      "desc": "Fitness smart watch with heart rate and sleep tracking.",
      "originalPrice": 8000,
      "discountedPrice": 6200,
      "inStock": true
    },
    {
      "_id": "p0036",
      "title": "Bluetooth Speaker",
      "image": "https://via.placeholder.com/200x200.png?text=Speaker",
      "desc": "Portable Bluetooth speaker with deep bass.",
      "originalPrice": 6000,
      "discountedPrice": 4500,
      "inStock": false
    }
  ]

  const columns = [
      { field: "_id", headerName: "ID", width: 90 },
      {
        field: "product",
        headerName: "Product",
        width: 300,
        renderCell: (params) => {
          return (
            <div className="flex items-center">
              <img
                className="h-12 w-12 rounded-full object-cover mr-2"
                src={params.row.img}
                alt=""
                height="100px"
                width="100px"
              />
              {params.row.title}
            </div>
          );
        },
      },
      { field: "brand", headerName: "Brand", width: 150 },
      { field: "originalPrice", headerName: "Price ($)", width: 100 },
      { field: "inStock", headerName: "In Stock", width: 100 },
  
      {
        field: "edit",
        headerName: "Edit",
        width: 100,
        renderCell: (params) => {
          return (
            <>
              <Link to={`/product/${params.id}`}>
                <button className="bg-gray-400 text-white cursor-pointer w-[70px]">
                  Edit
                </button>
              </Link>
            </>
          );
        },
      },
      {
        field: "delete",
        headerName: "Delete",
        width: 100,
        renderCell: () => {
          return (
            <>
              <FaTrash className="text-red-500 cursor-pointer m-2" />
            </>
          );
        },
      },
    ];

  return (
    <div className='p-5 w-[100%]'>
      <div className="flex items-center justify-between m-[30px]">
        <h1>All Products</h1>
        <Link to='/dashboard/add-product'>
        <button className='bg-blue-500 text-white px-4 py-2 rounded'>Add Product</button>
        </Link>
      </div>
      <div className='m-[20px] h-[600px]'>
        <DataGrid
          getRowId={(row) => row._id}
          rows={data}
          columns={columns}
          checkboxSelection
        />
      </div>
    </div>
  )
}

export default Products
