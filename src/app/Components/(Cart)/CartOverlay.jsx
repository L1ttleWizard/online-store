import React from "react";
import { CartEmpty } from "./CartEmpty";
import { useDispatch } from "react-redux";
import { off } from "@/redux/features/switch";

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
        <img
          src="img/cart announcement.png"
          style={{ width: 30, height: 34 }}
          className="exclamation-mark"
        />
        <p className="text-hightlight">Your Cart is Empty</p>
        <p className="sidebar-text" style={{ textAlign: "center" }}>
          It is a paradisematic country, in which roasted parts of sentences fly
          into your mouth. Even the all-powerful.
        </p>
      </div>
    </div>
  );
};
