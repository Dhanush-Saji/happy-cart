import React from 'react'
import './ProductList.css'
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from 'react-router-dom'
import {productRows} from '../../Data/Data'
import { useState } from "react";
const ProductList = () => {
    const [productRow, setproductRow] = useState(productRows)
    const handleDeleteData = (id) =>{
        const newData = productRow.filter((item)=>id != item.id)
        setproductRow(newData)
      }
    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "product",
          headerName: "Product",
          width: 150,
          renderCell: (params) => {
            return (
              <div className="userListUser">
                <img className="userListImg" src={params.row.image} alt="" />
                {params.row.name}
              </div>
            );
          },
        },
        {
          field: "stocks",
          headerName: "Stocks",
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
          field: "price",
          headerName: "Price",
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
    <div className="products">
        <DataGrid disableSelectionOnClick style={{color:'white'}} rows={productRow} columns={columns} pageSize={5} checkboxSelection  />
    </div>
  )
}

export default ProductList