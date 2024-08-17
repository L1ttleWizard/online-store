
import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
  
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      const count = state[payload] || false;
      state[payload] = count + 1;
    },
    decrement: (state, { payload }) => {
      const count = state[payload];

      if (!count) {
        return;
      }

      if (count === 1) {
        delete state[payload];
        return;
      }

      state[payload] = count - 1;
    },
    reset: ()=>initialState,
    resetThis: (state, { payload }) => {
      delete state[payload];
    },
    updateStore: (state, { payload }) => {
      // Clear the existing state
      Object.keys(state).forEach(key => {
        delete state[key];
      });
      // Populate the state with new data
      Object.assign(state, payload);
    }
  },
});
export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
export const {reset} = cartSlice.actions;
export const {updateStore} = cartSlice.actions;
export const selectSum = (state)=>{
  return state.cart.length
}

