import { selectSum } from "@/redux/features/cart/selector";
import React from "react";
import {  useSelector } from "react-redux";
export const StoreLength = ()=>{
  
  return  useSelector(selectSum())
} 