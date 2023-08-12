import { configureStore  } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cartReducer } from "./features/cart";
import { switchReducer } from "./features/switch";
import thunk from "redux-thunk";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage:storage,
  }
  const persistedReducer = persistReducer(persistConfig, cartReducer);

const rootReducer = {
    cart:persistedReducer,
    switch:switchReducer,
    
}

export const store  = configureStore({
    reducer: rootReducer,
    middleware:[thunk]
    
});
export const persisor = persistStore(store);