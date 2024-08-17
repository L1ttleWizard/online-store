"use client"
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    email: null,
    photoURL: null,
    token: null,
};

const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.name = action.payload.displayName;
            state.email = action.payload.email;
            state.photoURL = action.payload.photoURL;
            state.token = action.payload.token;
        },
        logoutUser: () => initialState,  // Resets state to the initial state
    },
});

export const userDataReducer = userDataSlice.reducer;
export const { loginUser, logoutUser } = userDataSlice.actions;
