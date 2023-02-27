import React from "react";
import "./UserList.css";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from 'react-router-dom'
import {userRows} from '../../Data/Data'
import { useState } from "react";


const UserList = () => {
  const [userRow, setuserRow] = useState(userRows)
  const handleDeleteData = (id) =>{
    const newData = userRow.filter((item)=>id != item.id)
    setuserRow(newData)
  }
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "Username",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 110,
      editable: true,
    },
    {
      field: "status",
      headerName: "Status",
      width: 110,
      editable: true,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 110,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 110,
      renderCell:(params)=>{
        return(
          <div className="actionCell">
            <Link to={`/users/${params.row.id}`}>
            <button className="actionCellEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon className="actionCellDelete" onClick={()=>handleDeleteData(params.row.id)} />
          </div>
        )
      }
    },
    
  ];
  return (
    <div className="userList">
      <DataGrid disableSelectionOnClick style={{color:'white'}} rows={userRow} columns={columns} pageSize={5} checkboxSelection  />
    </div>
  );
};

export default UserList;
