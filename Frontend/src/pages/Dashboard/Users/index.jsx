import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import userRequest from '../../../requestMethods'

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("/users");
        setUsers(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, [])


  
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
        <DataGrid getRowId={(row) => row._id} rows={users} checkboxSelection columns={columns} />
      </div>
    </div>
  )
}

export default Users