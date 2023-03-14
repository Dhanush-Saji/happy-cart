import { createSlice } from "@reduxjs/toolkit";
import { getUserOrders } from "../API/APICalls";


const initialState = {
    orderItems: [],
    isLoading: false,
    isError: false,
  };

  const orderSlice = createSlice({
    name: 'userOrders',
    initialState,
    extraReducers: {
        [getUserOrders.pending]: (state) => {
          state.isLoading = true;
        },
        [getUserOrders.fulfilled]: (state, action) => {
          state.isLoading = false;
          state.orderItems = action.payload;
        },
        [getUserOrders.rejected]: (state) => {
          state.isLoading = false;
          state.isError = true;
        },
      },
  });

  export default orderSlice