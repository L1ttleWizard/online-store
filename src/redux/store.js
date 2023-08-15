import { configureStore  } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart";
import { switchReducer } from "./features/switch";
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig,cartReducer);


const rootReducer = {
    cart:persistedReducer,
    switch:switchReducer,
    
}

export const store  = configureStore({
    reducer: rootReducer,
    middleware:[thunk]
    
    
});

export const persistor = persistStore(store);