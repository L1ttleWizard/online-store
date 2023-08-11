import { configureStore  } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart";
import storage from "redux-persist/lib/storage";
import { switchReducer } from "./features/switch";
import thunk from "redux-thunk";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage,
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