import React from "react";

export const CartEmpty = () => {
  return (
    <>
      <img
        src="img/cart announcement.png"
        style={{ width: 30, height: 34 }}
        className="exclamation-mark"
      />
      <p className="text-hightlight text">Your Cart is Empty</p>
      <p className="sidebar-text" style={{ textAlign: "center" }}>
        Your cart is empy. Nice time to buy something
      </p>
    </>
  );
};
