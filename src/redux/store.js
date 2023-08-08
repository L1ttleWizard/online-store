import { configureStore  } from "@reduxjs/toolkit";
import { cartReducer } from "./features/cart";
import { switchReducer } from "./features/switch";


export const store  = configureStore({
    reducer:{
        cart:cartReducer,
        switch:switchReducer,
    },
});
