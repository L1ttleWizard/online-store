import React from "react";
import { CartEmpty } from "./CartEmpty";

export const CartOverlay = () => {
  return (
    <div className="sidebar-wrapper">
      <section className="sidebar-cart">
        <div className="left-container" />
        <div className="right-container">
          <div className="sidebar-header">
            <p className="your-cart">your cart</p>
            <span className="x-logo" />
          </div>
          <div className="sidebar-main">
            {/* {cart.length>0 ? <Cartplates/>:<CartEmpty/>} */}
            <CartEmpty/>
          </div>
        </div>
      </section>
    </div>
  );
};
