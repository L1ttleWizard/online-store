import React from "react";
import { CartEmpty } from "./CartEmpty";
import { useDispatch } from "react-redux";
import { off } from "@/redux/features/switch";
import { CartPlates } from "./CartPlates";

export const CartOverlay = () => {
  const dispatch = useDispatch();
  return (
    <div className="right-container">
      <div className="sidebar-header">
        <p className="your-cart">your cart</p>
        <span onClick={()=>{
          dispatch(off());
        }} className="x-logo" />
      </div>
      <div className="sidebar-main">
        <CartPlates/>
      </div>
    </div>
  );
};
