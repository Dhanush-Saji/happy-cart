import React from 'react'
import './ProductList.css'
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from 'react-router-dom'
import {productRows} from '../../Data/Data'
import { useState } from "react";
import { Box, Button, Modal, Typography } from '@mui/material';
import AddProducts from '../../Components/AddProducts/AddProducts';
const ProductList = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 2,
        pt:0
      };
      const closeFn = () =>{
        handleClose()
      }
  return (
    <div className="products">
      <div className="addCartDiv">
            <Button onClick={handleOpen}>ADD</Button>
        </div>
        <DataGrid disableSelectionOnClick style={{color:'white'}} rows={productRow} columns={columns} pageSize={5} checkboxSelection  />
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <AddProducts closeFn={closeFn} />
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default ProductList