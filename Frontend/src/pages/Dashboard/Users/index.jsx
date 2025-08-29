import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { FaTrash } from 'react-icons/fa'

const Users = () => {
  const data= [
    {
      "_id": "64a1f1c0a1b2c3d4e5f601",
      "name": "Ali Khan",
      "email": "ali.khan@example.com",
      "phone": "+92 300 1234567",
      "role": "admin"
    },
    {
      "_id": "64a1f1c0a1b2c3d4e5f602",
      "name": "Sara Ahmed",
      "email": "sara.ahmed@example.com",
      "phone": "+92 333 7654321",
      "role": "user"
    },
    {
      "_id": "64a1f1c0a1b2c3d4e5f603",
      "name": "Hamza Malik",
      "email": "hamza.malik@example.com",
      "phone": "+92 321 9876543",
      "role": "editor"
    },
    {
      "_id": "64a1f1c0a1b2c3d4e5f604",
      "name": "Ayesha Noor",
      "email": "ayesha.noor@example.com",
      "phone": "+92 345 1112233",
      "role": "user"
    },
    {
      "_id": "64a1f1c0a1b2c3d4e5f605",
      "name": "Usman Ali",
      "email": "usman.ali@example.com",
      "phone": "+92 312 5557788",
      "role": "moderator"
    },
    {
      "_id": "64a1f1c0a1b2c3d4e5f606",
      "name": "Fatima Zahra",
      "email": "fatima.zahra@example.com",
      "phone": "+92 301 6661122",
      "role": "user"
    },
    {
      "_id": "64a1f1c0a1b2c3d4e5f607",
      "name": "Bilal Sheikh",
      "email": "bilal.sheikh@example.com",
      "phone": "+92 322 7773344",
      "role": "editor"
    },
    {
      "_id": "64a1f1c0a1b2c3d4e5f608",
      "name": "Mariam Riaz",
      "email": "mariam.riaz@example.com",
      "phone": "+92 303 8885566",
      "role": "user"
    },
    {
      "_id": "64a1f1c0a1b2c3d4e5f609",
      "name": "Omar Farooq",
      "email": "omar.farooq@example.com",
      "phone": "+92 311 9997788",
      "role": "admin"
    },
    {
      "_id": "64a1f1c0a1b2c3d4e5f610",
      "name": "Zainab Hussain",
      "email": "zainab.hussain@example.com",
      "phone": "+92 320 1239876",
      "role": "user"
    },
    {
      "_id": "64a1f1c0a1b2c3d4e5f611",
      "name": "Rehan Qureshi",
      "email": "rehan.qureshi@example.com",
      "phone": "+92 344 4321987",
      "role": "moderator"
    },
    {
      "_id": "64a1f1c0a1b2c3d4e5f612",
      "name": "Nida Javed",
      "email": "nida.javed@example.com",
      "phone": "+92 300 7654321",
      "role": "user"
    },
    {
      "_id": "64a1f1c0a1b2c3d4e5f613",
      "name": "Adnan Siddiqui",
      "email": "adnan.siddiqui@example.com",
      "phone": "+92 331 5556677",
      "role": "editor"
    },
    {
      "_id": "64a1f1c0a1b2c3d4e5f614",
      "name": "Sadia Khan",
      "email": "sadia.khan@example.com",
      "phone": "+92 302 1112233",
      "role": "user"
    },
    {
      "_id": "64a1f1c0a1b2c3d4e5f615",
      "name": "Imran Shah",
      "email": "imran.shah@example.com",
      "phone": "+92 310 2223344",
      "role": "admin"
    },
    {
      "_id": "64a1f1c0a1b2c3d4e5f616",
      "name": "Hira Aslam",
      "email": "hira.aslam@example.com",
      "phone": "+92 321 3334455",
      "role": "user"
    },
    {
      "_id": "64a1f1c0a1b2c3d4e5f617",
      "name": "Tariq Mehmood",
      "email": "tariq.mehmood@example.com",
      "phone": "+92 334 4445566",
      "role": "editor"
    },
    {
      "_id": "64a1f1c0a1b2c3d4e5f618",
      "name": "Laiba Akram",
      "email": "laiba.akram@example.com",
      "phone": "+92 345 5556677",
      "role": "user"
    },
    {
      "_id": "64a1f1c0a1b2c3d4e5f619",
      "name": "Waleed Hassan",
      "email": "waleed.hassan@example.com",
      "phone": "+92 333 6667788",
      "role": "moderator"
    },
    {
      "_id": "64a1f1c0a1b2c3d4e5f620",
      "name": "Khadija Imtiaz",
      "email": "khadija.imtiaz@example.com",
      "phone": "+92 312 7778899",
      "role": "user"
    }
  ];
 const columns = [
     { field: "_id", headerName: "ID", width: 90 },
     { field: "name", headerName: "Name", width: 150 },
     { field: "email", headerName: "Email", width: 200 },
     { field: "phone", headerName: "Phone", width: 150 },
     { field: "role", headerName: "Role", width: 130 },
     {
       field: "delete",
       headerName: "Delete",
       width: 150,
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
            <h1>All Users</h1>
          </div>
          <div className='m-[30px]'>
            <DataGrid getRowId={(row) => row._id} rows={data} checkboxSelection columns={columns} />
          </div>
        </div>
  )
}

export default Users