import React, { useEffect, useMemo } from 'react'
import './ProductList.css'
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from 'react-router-dom'
import {productRows} from '../../Data/Data'
import { useState } from "react";
import { Box, Button, Modal, Typography } from '@mui/material';
import AddProducts from '../../Components/AddProducts/AddProducts';
import { getProductsFnApi } from '../../API/APICalls';
import { useDispatch, useSelector } from 'react-redux';
const ProductList = () => {
const dispatch = useDispatch()
const categoryData = useSelector((store)=>store.categoryReducer.categoryData) || []
const productData = useSelector((store)=>store.productReducer.productData) || []
const rows = useMemo(
  () => productData.map((row, index) => ({ ...row, id: row._id })),
  [productData]
);
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
          field: "products",
          headerName: "Products",
          width: 110,
          renderCell: (params) => {
            return (
              <div className="userListUser">
                <img className="userListImg" src={params.row.image.url} alt="Category pic" />
                {params.row.title}
              </div>
            );
          },
        },
        {
          field: "category",
          headerName: "Category",
          width: 110,
          editable: true,
          renderCell: (params) => {
            let dataFound = categoryData.find(item=>item._id == params.row.category)
            return (
              <div className="userListUser">
                {dataFound?dataFound.title:'Invalid category'}
              </div>
            );
          },
        },
        {
          field: "color",
          headerName: "Color",
          width: 80,
          editable: true,
        },
        {
          field: "price",
          headerName: "Price",
          width: 80,
          editable: true,
        },
        {
          field: "createdAt",
          headerName: "Created at",
          width: 110,
          renderCell: (params) => {
            let date = new Date(params.row.createdAt)
            return (
              <div className="userListUser">
                {`${date.getDate()}/${date.toLocaleString('default', { month: 'long' })}/${date.getFullYear()}`}
              </div>
            );
          },
        },
        {
          field: "updatedAt",
          headerName: "Updated at",
          width: 110,
          renderCell: (params) => {
            let date = new Date(params.row.updatedAt)
            return (
              <div className="userListUser">
                {`${date.getDate()}/${date.toLocaleString('default', { month: 'long' })}/${date.getFullYear()}`}
              </div>
            );
          },
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
      useEffect(()=>{
        let firstTime = true
        dispatch(getProductsFnApi(firstTime))
      },[])
  return (
    <div className="products">
      <div className="addCartDiv">
            <Button onClick={handleOpen}>ADD</Button>
        </div>
        <DataGrid disableSelectionOnClick style={{color:'white'}} rows={rows} columns={columns} pageSize={8} checkboxSelection  />
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