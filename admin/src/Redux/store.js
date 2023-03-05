import { legacy_createStore, combineReducers, applyMiddleware,createStore } from 'redux';
import { authReducer } from './AuthReducer/Auth.reducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { categoryReducer } from './CartReducer/Category.reducer';


const persistConfig = {
    key: 'persistData',
    storage,
  };
const rootReducer = combineReducers({
  authReducer,categoryReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);