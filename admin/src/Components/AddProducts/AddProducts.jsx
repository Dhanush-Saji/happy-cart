import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer ,toast} from 'react-toastify';
import { Button, FormControl, MenuItem, Select,InputLabel,TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './AddProducts.css'
import { addProductsFnApi } from '../../API/APICalls';

const AddProducts = ({closeFn}) => {
    const categoryDataRedux = useSelector((store)=>store.categoryReducer.categoryData) || []
    const dispatch = useDispatch()
    const [productData, setproductData] = useState({selectCategory:'',productImage:'',productTitle:'',productDes:'',productColor:'',productPrice:'',productCategory:''})

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        transformFile(file)
      };
      const transformFile = (file) =>{
        const reader = new FileReader()
        if(file){
            reader.readAsDataURL(file)
            reader.onloadend = () =>{
                // setproductImage(reader.result)
                setproductData({...productData,productImage:reader.result})
            }
        }else{
            // setproductImage('')
            setproductData({...productData,productImage:''})
        }
      }
      const handleSubmit = (e) =>{
        e.preventDefault()
        const payload = {
          title:productData.productTitle,
    des:productData.productDes,
    image:productData.productImage,
    category:productData.productCategory,
    color:productData.productColor,
    price:productData.productPrice,
        }
        if(!productData.productImage){
          toast.error('Uploading without image? no way..!😠');
        }else{
          dispatch(addProductsFnApi(payload))
          setproductData({selectCategory:'',productImage:'',productTitle:'',productDes:'',productColor:'',productPrice:'',productCategory:''})
        }

      }
  return (
    <div className="productChildDiv">
        <div className="closeBtnDiv">
          <CloseIcon onClick={closeFn} />
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="" className="usernameLabel">
            Product Image
          </label>
  <input id="file-input" accept=".jpg,.png" type="file" onChange={handleFileInputChange} />
          
          <TextField
          required
          id="outlined-required"
          label="Product title"
          defaultValue="Enter Product title" value={productData.productTitle}
          onChange={(e)=>setproductData({...productData,productTitle:e.target.value})}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          maxRows={4} value={productData.productDes}
          onChange={(e)=>setproductData({...productData,productDes:e.target.value})}
        />
        <TextField
          id="outlined"
          label="Product color"
          defaultValue="Enter Product color" value={productData.productColor}
          onChange={(e)=>setproductData({...productData,productColor:e.target.value})}
        />
        <TextField
        required
          id="outlined-number"
          label="Price"
          type="number"
          value={productData.productPrice}
          onChange={(e)=>setproductData({...productData,productPrice:e.target.value})}
        />
          <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Category</InputLabel>
         <Select
         required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Category"
          value={productData.productCategory}
          onChange={(e)=>setproductData({...productData,productCategory:e.target.value})}
        >
          {
            categoryDataRedux.map((item)=>(

              <MenuItem value={item._id}>{item.title}</MenuItem>
            ))
          }
        </Select>
        </FormControl>
          <Button
            type="submit"
            variant="contained"
          >
            Create product
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