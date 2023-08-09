import { configureStore  } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart";
import { switchReducer } from "./features/switch";
import localStorageMiddleware from "@/middleware/middleware";

const savedState = JSON.parse(localStorage.getItem('reduxState'));

const rootReducer = {
    cart:cartReducer,
    switch:switchReducer
}

export const store  = configureStore({
    reducer: rootReducer,
    middleware:[localStorageMiddleware],
    
});
