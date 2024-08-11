"use client"
import {createSlice} from "@reduxjs/toolkit"

const initialState = {

};
const userDataSlice= createSlice({
    name:'userData',
    initialState,
    reducers:{
        loginUser:(state,action)=>{
            state.name = action.payload.displayName;
            state.email = action.payload.email;
            state.photoURL = action.payload.photoURL;
            state.token = action.payload.token;
        },
        logoutUser:(state)=>{
           state.name = '';
           state.email = '';
           state.photoURL = '';
           state.token = '';
        }
    }
})
export const userDataReducer = userDataSlice.reducer;
export const {loginUser,logoutUser} = userDataSlice.actions;