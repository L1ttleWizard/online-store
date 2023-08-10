import { createSlice } from "@reduxjs/toolkit";

let savedState = JSON.parse(localStorage.getItem("reduxState"));

let initialState =
  savedState.cart ||
  {
    // Your initial state here
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
    reset: (state) => {
      state.cart = {};
      localStorage.removeItem("reduxState");
    },
    resetThis: (state, { payload }) => {
      delete state[payload];
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
