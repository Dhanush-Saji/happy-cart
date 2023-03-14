import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../API/APICalls";


const initialState = {
    user: null,
    isLoading: false,
    isError: false,
  };

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [registerUser.pending]: (state) => {
          state.isLoading = true;
        },
        [registerUser.fulfilled]: (state, action) => {
          state.isLoading = false;
          state.user = action.payload;
        },
        [registerUser.rejected]: (state) => {
          state.isLoading = false;
          state.isError = true;
        },
        [loginUser.pending]: (state) => {
          state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, action) => {
          state.isLoading = false;
          state.user = action.payload;
        },
        [loginUser.rejected]: (state) => {
          state.isLoading = false;
          state.isError = true;
        },
      },
  });

  export default authSlice