"use client";
import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import {
  MoreProductsConfig,
  featuredMugsConfig,
} from "../../../public/Data/configs";

const allProductsRAW = MoreProductsConfig.concat(featuredMugsConfig);
const allProducts = allProductsRAW.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(allProducts);
export default function Home() {
  const cartItems = useSelector((state) => state.cart);
  const filteredArray = allProducts.filter((obj) =>
    cartItems.hasOwnProperty(obj.id)
  );
  console.log("filteredArray :>> ", filteredArray);
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <div className="columns-2 flex">
        <div>
          {filteredArray.map((mug) => {
            return <CartItem mug={mug} key={mug.id} />;
          })}
        </div>
        <div className=" w-5/12 ps-5">c-s</div>
      </div>
    </>
  );
}
