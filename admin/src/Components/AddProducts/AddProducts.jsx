import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { Button, MenuItem, Select } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './AddProducts.css'

const AddProducts = ({closeFn}) => {
    const categoryData = useSelector((store)=>store.categoryReducer.categoryData) || []
    const dispatch = useDispatch()
    const [selectCategoryData, setselectCategoryData] = useState('')
    const [productImage, setproductImage] = useState('')
    const [productTitle, setproductTitle] = useState('')
    let payload={
        title:productTitle,image:productImage
    }
    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        transformFile(file)
      };
      const transformFile = (file) =>{
        const reader = new FileReader()
        if(file){
            reader.readAsDataURL(file)
            reader.onloadend = () =>{
                setproductImage(reader.result)
            }
        }else{
            setproductImage('')
        }
      }
      const handleSubmit = (e) =>{
        e.preventDefault()
        let payload={
            title:productTitle,image:productImage
        }
        // dispatch(addCartFnApi(payload))
        setproductImage('')
        setproductTitle('')
      }
      console.log(categoryData)
  return (
    <div className="categoryChildDiv">
        <div className="closeBtnDiv">
          <CloseIcon onClick={closeFn} />
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="" className="usernameLabel">
            Product Image
          </label>
  <input id="file-input" accept=".jpg,.png" type="file" onChange={handleFileInputChange} />
          <label htmlFor="" className="usernameLabel">
            Product Title
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Product title"
            value={productTitle}
            onChange={(e)=>setproductTitle(e.target.value)}
          />
         <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectCategoryData}
          label="Category"
          inputProps={{
            style: { color: "red" },
          }}
          InputLabelProps={{
            style: { color: "red" },
          }}
          onChange={(e)=>setselectCategoryData(e.target.value)}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
          <Button
            type="submit"
            variant="contained"
          >
            Create category
          </Button>
        </form>
        <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      </div>
  )
}

export default AddProducts