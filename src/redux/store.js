'use client'
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart";
import { switchReducer } from "./features/switch";
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from "redux-persist/lib/storage";
import { loadingReducer } from "./features/loading";
import { userDataReducer } from "./features/userData";
import { firestoreDatabase } from "@/app/firebase/config";
import firestoreMiddleware from "./features/firestoreMiddleware";
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
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false,}).concat(firestoreMiddleware).concat([thunk])
    
    
});

export const persistor = persistStore(store);