import { selectProductAmount } from "@/redux/features/cart/selector";
import React from "react";
import { useSelector } from "react-redux";
 
export const CartPlates = ()=>{
    const cartItems = useSelector((state)=>{return state.cart})
    console.log(cartItems);
  return(
    <div>
      g
    </div>
  )
}