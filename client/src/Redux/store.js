
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import addressSlice from './addressSlice';
import cartSlice from './cartSlice';
import categorySlice from './categorySlice';
import popularSlice from './PopularSlice';
import productSlice from './productSlice';
import authSlice from './authSlice';
import orderSlice from './userOrderSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  category:categorySlice.reducer,
  popularItems:popularSlice.reducer,
  products:productSlice.reducer,
  orders:orderSlice.reducer,
  cart:cartSlice.reducer,
  address:addressSlice.reducer,
  user:authSlice.reducer,
}));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export const cleanPersistedData = () => {
  persistor.purge(['root']).then(() =>  {
    console.log('cleared')
    store.dispatch({ type: 'RESET' })});
};

