import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartItems: [],
    total:0,
    cartQuantity:0,
    isLoading: false,
    isError: false,
  };

  const cartSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers:{
        addToCartRequest:(state,action)=>{
            state.isLoading=true
        },
        addToCartSuccess:(state,action)=>{
            state.isLoading=false
            let find = state.cartItems.findIndex((item)=>item._id === action.payload._id)
            if(find>=0){
                state.cartItems[find].quantity += action.payload.quantity
            }else{
                state.cartItems.push(action.payload)
            }
            state.cartQuantity = state.cartItems.reduce((sum,el)=>{
                return sum + el.quantity
            },0)
            state.total = state.cartItems.reduce((sum,el)=>{
                return sum + (el.price*el.quantity)
            },0)
            
        },
        clearReduxCart:(state,action)=>{
            state.cartItems = []
            state.total = 0
            state.cartQuantity=0
        },
        removeItems:(state,action)=>{
            state.cartItems = state.cartItems.filter((item)=>item._id !== action.payload._id)
            state.cartQuantity = state.cartItems.reduce((sum,el)=>{
                return sum + el.quantity
            },0)
            state.total = state.cartItems.reduce((sum,el)=>{
                return sum + (el.price*el.quantity)
            },0)
            
        },
        increaseProductQuantity:(state,{payload})=>{
            const cartItem = state.cartItems.find((item)=>item._id === payload._id)
            cartItem.quantity += 1
            state.cartQuantity = state.cartItems.reduce((sum,el)=>{
                return sum + el.quantity
            },0)
            state.total = state.cartItems.reduce((sum,el)=>{
                return sum + (el.price*el.quantity)
            },0)
            
        },
        decreaseProductQuantity:(state,{payload})=>{
            const cartItem = state.cartItems.find((item)=>item._id === payload._id)
            cartItem.quantity -= 1
            state.cartQuantity = state.cartItems.reduce((sum,el)=>{
                return sum + el.quantity
            },0)
            state.total = state.cartItems.reduce((sum,el)=>{
                return sum + (el.price*el.quantity)
            },0)
            
        },
    }
    
  });

  export const {addToCartSuccess,addToCartRequest,removeItems,increaseProductQuantity,decreaseProductQuantity,clearReduxCart} = cartSlice.actions
  export default cartSlice