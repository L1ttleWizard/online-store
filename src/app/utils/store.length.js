import React from "react";
import { useDispatch, useSelector } from "react-redux";
export const StoreLength = ()=>{
    const dispatch = useDispatch();
  const storage = useSelector((state) => {
    return state.cart;
  });
  console.log(Object.keys(storage))
  return  Object.keys(storage).length-2
}