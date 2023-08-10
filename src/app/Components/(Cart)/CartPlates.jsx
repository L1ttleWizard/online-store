import { selectProductAmount } from "@/redux/features/cart/selector";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoreProductsConfig, featuredMugsConfig } from "../../../../public/Data/configs"; 
import { cartActions } from "@/redux/features/cart";


const allProductsRAW = MoreProductsConfig.concat(featuredMugsConfig);
const allProducts = allProductsRAW.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

export const CartPlates = ()=>{
  const dispatch = useDispatch();
  console.log(allProducts);
     const cartItems = useSelector((state)=>{return state.cart});
     console.log(cartItems);
     const filteredArray = allProducts.filter(obj => cartItems.hasOwnProperty(obj.id));
     console.log(filteredArray);
    
     return(
    <button onClick={()=>{dispatch(cartActions.reset())}}>clear all cart</button>
     )


  }