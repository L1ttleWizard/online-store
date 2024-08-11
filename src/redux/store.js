'use client'
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart";
import { switchReducer } from "./features/switch";
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from "redux-persist/lib/storage";
import { loadingReducer } from "./features/loading";
import { userDataReducer } from "./features/userData";
const persistConfig = {
    key: 'root',
    storage,
}



const rootReducer = combineReducers({
    cart:cartReducer,
    switch:switchReducer,
    loading:loadingReducer,
    user:userDataReducer
    
});
const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store  = configureStore({
    reducer: persistedReducer,
    middleware:[thunk] 
    
    
});

export const persistor = persistStore(store);