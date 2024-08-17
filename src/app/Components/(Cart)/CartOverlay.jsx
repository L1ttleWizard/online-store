"use client"
import React from "react";
import { CartEmpty } from "./CartEmpty";
import { useDispatch, useSelector } from "react-redux";
import { off } from "@/redux/features/switch";
import { StoreLength } from "@/app/utils/store.length";
import { CartPlate } from "./CartPlate";

export const CartOverlay = () => {
  const dispatch = useDispatch();
  const storelen = useSelector(state=>Object.keys(state.cart).length);
  console.log(`storele`);
  useEffect()
  return (
    <div className="right-container">
      <div className="sidebar-header">
        <p className="your-cart">your cart</p>
        <span
          onClick={() => {
            dispatch(off());
          }}
          className="x-logo"
        />
      </div>
      <div className="sidebar-main">
        {storelen>0?<CartPlate />:<CartEmpty/>}
      </div>
    </div>
  );
};
    