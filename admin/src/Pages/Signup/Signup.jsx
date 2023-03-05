import React, { useState } from "react";
import "./Signup.css";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import * as yup from "yup";
import { passwordRules } from "../../Utils/PasswordRules";
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from '@mui/material/Avatar';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import {useDispatch, useSelector} from 'react-redux'
import { registerFnApi } from "../../API/APICalls";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const [username, setusername] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const [password, setpassword] = useState("");
  const [avatarImage, setavatarImage] = useState('')
  const onSubmit = (values, actions) => {
    
    const { email, password,name } = values;
    let payload={
        email,password,name,avatar:avatarImage,isAdmin:true
    }
    dispatch(registerFnApi(payload))
    setusername(email);
    setpassword(password);
    setTimeout(actions.resetForm, 1000);
    setavatarImage('')
  };
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("required"),
    password: yup
      .string()
      .min(5)
      .matches(passwordRules, { message: "Please create a stronger password" })
      .required("required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    transformFile(file)
  };
  const transformFile = (file) =>{
    const reader = new FileReader()
    if(file){
        reader.readAsDataURL(file)
        reader.onloadend = () =>{
            setavatarImage(reader.result)
        }
    }else{
        setavatarImage('')
    }
  }
  const data = useSelector((store)=>store.authReducer.userData) || []
  useEffect(() => {
    if (data.length>0) {
      // If the server response indicates success, navigate to the next page
      navigate('/');
    }
  }, [data, navigate]);
  return (
    <div className="signupParentDiv">
      <div className="signupChildDiv">
        <form action="" onSubmit={formik.handleSubmit}>
        <div htmlFor="file-input" className="upload-button" onClick={() => document.getElementById('file-input').click()}>
            {
                avatarImage?<img src={avatarImage} alt="user avatar" className="avatarImage" />:<PersonPinIcon />
            }
        
        <div className="avatarEditIcon">
            <span>
            <AutoFixHighIcon sx={{width:'1rem'}} />
            </span>
        </div>
        
  <input id="file-input" accept=".jpg,.png" type="file" onChange={handleFileInputChange} style={{display:'none'}} />
      </div>
          <label htmlFor="" className="usernameLabel">
            Name
          </label>
          <input
            type="text"
            id="name"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Enter your name"
          />
          <label htmlFor="" className="usernameLabel">
            Email
          </label>
          <input
            type="email"
            id="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            className={
              formik.errors.email && formik.touched.email ? "input-error" : ""
            }
            placeholder="Enter your email"
          />
          {formik.errors.email && formik.touched.email && (
            <p className="errorEmail">{formik.errors.email}</p>
          )}
          <label htmlFor="" className="usernameLabel">
            Password
          </label>
          <input
            id="password"
            type="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            className={
              formik.errors.password && formik.touched.password
                ? "input-error"
                : ""
            }
            placeholder="Enter password"
          />
          {formik.errors.password && formik.touched.password && (
            <p className="errorEmail">{formik.errors.password}</p>
          )}
          <label htmlFor="" className="usernameLabel">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            className={
              formik.errors.confirmPassword && formik.touched.confirmPassword
                ? "input-error"
                : ""
            }
            placeholder="Enter Password"
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <p className="errorEmail">{formik.errors.confirmPassword}</p>
          )}
          <Button
            type="submit"
            variant="contained"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting && (
              <CircularProgress
                size={24}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            )}
            {formik.isSubmitting ? "let me check..." : "Create account"}
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
    </div>
  );
};

export default Signup;
