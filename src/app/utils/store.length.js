import React from "react";
import { useDispatch, useSelector } from "react-redux";
export const StoreLength = ()=>{
    const dispatch = useDispatch();
  const storage = useSelector((state) => {
    return state.cart;
  });
  return  Object.keys(storage).length-1
}