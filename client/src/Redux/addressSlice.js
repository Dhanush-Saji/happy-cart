import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    addressArray: [],
    isLoading: false,
    isError: false,
  };

  const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers:{
        addAddress:(state,action)=>{
            state.addressArray.push(action.payload)
        },
    }
  });

  export const {addAddress} = addressSlice.actions
  export default addressSlice