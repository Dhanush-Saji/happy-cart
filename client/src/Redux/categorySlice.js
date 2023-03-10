import { createSlice } from "@reduxjs/toolkit";
import { getCategoryItems } from "../API/APICalls";


const initialState = {
    categoryItems: [],
    isLoading: false,
    isError: false,
  };

  const categorySlice = createSlice({
    name: 'category',
    initialState,
    extraReducers: {
        [getCategoryItems.pending]: (state) => {
          state.isLoading = true;
        },
        [getCategoryItems.fulfilled]: (state, action) => {
          state.isLoading = false;
          state.categoryItems = action.payload;
        },
        [getCategoryItems.rejected]: (state) => {
          state.isLoading = false;
          state.isError = true;
        },
      },
  });

  export default categorySlice