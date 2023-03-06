import React, { useEffect, useState } from 'react'
import './Category.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {Link} from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Box, Typography } from '@mui/material';
import AddCategory from './../../Components/AddCategory/AddCategory';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { getCategoryFnApi } from '../../API/APICalls';
const Category = () => {
  const dispatch = useDispatch()
  
    const categoryData = useSelector((store)=>store.categoryReducer.categoryData) || []

    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const [productRow, setproductRow] = useState(categoryData)
    const rows = useMemo(
      () => categoryData.map((row, index) => ({ ...row, id: row._id })),
      [categoryData]
    );
    const columns = useMemo(
      () =>[
        { field: "_id", headerName: "ID", width: 120 },
        {
          field: "categories",
          headerName: "Categories",
          width: 150,
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
                <button className="actionCellEdit">Edit</button>
                <DeleteOutlineIcon className="actionCellDelete" onClick={()=>handleDeleteData(params.row._id)} />
              </div>
            )
          }
        },
        
      ]);
      const handleDeleteData = (id) =>{
        const newData = productRow.filter((item)=>id != item.id)
        setproductRow(newData)
      }
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
        dispatch(getCategoryFnApi(firstTime))
      },[])
  return (
    <div className='categoryPage'>
        <div className="addCartDiv">
            <Button onClick={handleOpen}>ADD</Button>
        </div>
        <DataGrid disableSelectionOnClick style={{color:'white'}} rows={rows} columns={columns} pageSize={5} checkboxSelection  />
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <AddCategory closeFn={closeFn} />
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Category