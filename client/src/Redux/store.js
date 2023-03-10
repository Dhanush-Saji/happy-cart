import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import categorySlice from './categorySlice';
import popularSlice from './PopularSlice';
import productSlice from './productSlice';

export const store = configureStore({
  reducer: {
    category:categorySlice.reducer,
    popularItems:popularSlice.reducer,
    products:productSlice.reducer,
    cart:cartSlice.reducer
  },
});