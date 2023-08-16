"use client";
import React from "react";
import { useSelector } from "react-redux";
import {
  MoreProductsConfig,
  featuredMugsConfig,
} from "../../../../public/Data/configs";
import { CartItem } from "../CartItem";

const allProductsRAW = MoreProductsConfig.concat(featuredMugsConfig);
const allProducts = allProductsRAW.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

export const CartPlate = () => {
  const cartItems = useSelector((state) => state.cart);
  const filteredArray = allProducts.filter((obj) =>
    cartItems.hasOwnProperty(obj.id)
  );
  console.log("filteredArray :>> ", filteredArray);
  return(
    <div>{filteredArray.map((mug)=>{
      return(<CartItem mug={mug} key={mug.id}/>)
    })}</div>
    
  )
};
