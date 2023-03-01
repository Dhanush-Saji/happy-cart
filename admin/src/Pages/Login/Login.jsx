import React, { useEffect, useState } from "react";
import "./Login.css";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import * as yup from "yup";
import { passwordRules } from "../../Utils/PasswordRules";
import CircularProgress from "@mui/material/CircularProgress";
import { loginFnApi } from "../../API/APICalls";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const navigate = useNavigate()
    const dispatch = useDispatch()
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const onSubmit = (values, actions) => {
    const { email, password } = values;
    let payload={
      email,password
  }
  dispatch(loginFnApi(payload))
    setusername(email);
    setpassword(password);
    setTimeout(actions.resetForm, 1000);
  };
  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });
  const data = useSelector((store)=>store.authReducer.userData) || []
  useEffect(() => {
    if (data.length>0) {
      // If the server response indicates success, navigate to the next page
      navigate('/');
    }
  }, [data, navigate]);
  return (
    <>
    <div className="loginParentDiv">
      <div className="loginChildDiv">
        <form action="" onSubmit={formik.handleSubmit}>
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
            placeholder="Enter username"
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
            {formik.isSubmitting ? "let me check..." : "Login"}
          </Button>
        </form>
      </div>
    </div>
        <ToastContainer />
    </>
  );
};

export default Login;
