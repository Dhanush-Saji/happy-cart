import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../API/APICalls";


const initialState = {
    products: [],
    isLoading: false,
    isError: false,
  };

  const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: {
        [getProducts.pending]: (state) => {
          state.isLoading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
          state.isLoading = false;
          state.products = action.payload;
        },
        [getProducts.rejected]: (state) => {
          state.isLoading = false;
          state.isError = true;
        },
      },
  });

  export default productSlice