import { createSlice } from "@reduxjs/toolkit";
import { getPopularItems } from "../API/APICalls";


const initialState = {
    popularItemsArray: [],
    isLoading: false,
    isError: false,
  };

  const popularSlice = createSlice({
    name: 'popularItems',
    initialState,
    extraReducers: {
        [getPopularItems.pending]: (state) => {
          state.isLoading = true;
        },
        [getPopularItems.fulfilled]: (state, action) => {
          state.isLoading = false;
          state.popularItemsArray = action.payload;
        },
        [getPopularItems.rejected]: (state) => {
          state.isLoading = false;
          state.isError = true;
        },
      },
  });

  export default popularSlice