import React, { useState } from "react";
import "./Signup.scss";
import { useFormik } from "formik";
import * as yup from "yup";
import { passwordRules } from "../../Utils/PasswordRules";
import {useDispatch, useSelector} from 'react-redux'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import {useLocation, useNavigate} from 'react-router-dom'
import {BiPencil} from 'react-icons/bi'
import { Button } from "@chakra-ui/react";
import { registerUser } from "../../API/APICalls";
import { Link } from "react-router-dom";

const Signup = () => {
  const location = useLocation();
  const pathname = location.state?location.state.pathname:null;
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const [avatarImage, setavatarImage] = useState('')
  const onSubmit = (values, actions) => {
    const { email, password,name } = values;
    let payload={
        email,password,name,avatar:avatarImage,isAdmin:false
    }
    dispatch(registerUser(payload))
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
    const reader = new FileReader()
    if(file){
      reader.readAsDataURL(file)
      reader.onloadend = () =>{
          setavatarImage(reader.result)
      }
  }else{
      setavatarImage('')
  }
  };
  const { user: data } = useSelector((state) => state.user || {});

  const triggerFn = () =>{
    pathname?navigate(pathname):navigate('/');

  }
  useEffect(() => {
    if (data) {
      // If the server response indicates success, navigate to the next page
      setTimeout(triggerFn,2000)
    }
  }, [data, navigate]);
  return (
    <div className="signupParentDiv">
      <div className="signupChildDiv">
        <form action="" onSubmit={formik.handleSubmit}>
        <div htmlFor="file-input" className="upload-button" onClick={() => document.getElementById('file-input').click()}>
            {
                avatarImage?<img src={avatarImage} alt="user avatar" className="avatarImage" />:<BiPencil />
            }
        
        <div className="avatarEditIcon">
            <span>
            <BiPencil sx={{width:'1rem'}} />
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
          <Button colorScheme='blue' type='submit'
            isLoading={formik.isSubmitting}
          >
            {formik.isSubmitting ? "let me check..." : "Create account"}
          </Button>
        <Link to='/login' style={{margin:'auto'}}>Already have an account?</Link>
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
