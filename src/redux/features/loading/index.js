"use client"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: true,
};
export const loadingSlice = createSlice({
  name: "switch",
  initialState,
  reducers: {
    loading: (state) => {
      state.active = true;
    },
    loaded: (state) => {
      state.active = false;
    },
  },
});
export const loadingReducer = loadingSlice.reducer;
export const {loading, loaded} = loadingSlice.actions;