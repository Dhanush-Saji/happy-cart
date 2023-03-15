import "./Login.scss";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@chakra-ui/react";
import { loginUser } from "../../API/APICalls";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.state ? location.state.pathname : null;
  const onSubmit = (values, actions) => {
    const { email, password } = values;
    let payload = {
      email,
      password,
    };
    dispatch(loginUser(payload));
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
  const { user: userData } = useSelector((state) => state.user || {});

  const triggerFn = () => {
    if (pathname) {
      navigate(pathname);
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    if (userData) {
      // If the server response indicates success, navigate to the next page
      setTimeout(triggerFn, 2000);
    }
  }, [userData, navigate]);
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
              colorScheme="blue"
              type="submit"
              isLoading={formik.isSubmitting}
            >
              {formik.isSubmitting ? "let me check..." : "Login"}
            </Button>
            <Link to="/signup" style={{ margin: "auto" }} state={{ pathname }}>
              Create new account?
            </Link>
          </form>
        </div>
      </div>
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
    </>
  );
};

export default Login;
