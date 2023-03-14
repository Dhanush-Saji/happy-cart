import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './Redux/store';
import './index.scss'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
  <BrowserRouter>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
  </BrowserRouter>
  </ChakraProvider>
);
