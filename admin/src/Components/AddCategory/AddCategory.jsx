import React, { useState } from 'react'
import { ToastContainer,toast} from 'react-toastify';
import CloseIcon from '@mui/icons-material/Close';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@mui/material';
import './AddCategory.css'
import { useDispatch } from 'react-redux';
import { addCategoryFnApi } from '../../API/APICalls';
const AddCategory = ({closeFn}) => {
    const dispatch = useDispatch()
    const [categoryImage, setcategoryImage] = useState('')
    const [categoryTitle, setcategoryTitle] = useState('')
    let payload={
        title:categoryTitle,image:categoryImage
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
                setcategoryImage(reader.result)
            }
        }else{
            setcategoryImage('')
        }
      }
      const handleSubmit = (e) =>{
        e.preventDefault()
        let payload={
            title:categoryTitle,image:categoryImage
        }
        if(!categoryImage || !categoryTitle){
          toast.error('Uploading without image or title? no way..!😠');
        }
        else{
          dispatch(addCategoryFnApi(payload))
        setcategoryImage('')
        setcategoryTitle('')
        }
        
      }
  return (
      <div className="categoryChildDiv">
        <div className="closeBtnDiv">
          <CloseIcon onClick={closeFn} />
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="" className="usernameLabel">
            Category Image
          </label>
  <input id="file-input" accept=".jpg,.png" type="file" onChange={handleFileInputChange} />
          <label htmlFor="" className="usernameLabel">
            Category Title
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter category title"
            value={categoryTitle}
            onChange={(e)=>setcategoryTitle(e.target.value)}
          />
         
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
        theme='dark'
      />
      </div>
  )
}

export default AddCategory