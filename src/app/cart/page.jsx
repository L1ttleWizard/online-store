"use client";
import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import {
  MoreProductsConfig,
  featuredMugsConfig,
} from "../../../public/Data/configs";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { selectProductAmount } from "@/redux/features/cart/selector";

const allProductsRAW = MoreProductsConfig.concat(featuredMugsConfig);
const allProducts = allProductsRAW.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

export default function Home() {
  const cartItems = useSelector((state) => state.cart);
  const filteredArray = allProducts.filter((obj) =>
    cartItems.hasOwnProperty(obj.id)
  );

  const finalCost = filteredArray.reduce((accumulator, item) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const productAmount = useSelector((state) =>
      selectProductAmount(state, item.id)
    );
    return accumulator + item.price * productAmount;
  }, 0);
  const rawCost = filteredArray.reduce((accumulator, item) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const productAmount = useSelector((state) =>
      selectProductAmount(state, item.id)
    );
    return item.salePrice !== null
      ? accumulator + item.salePrice * productAmount
      : accumulator + item.price * productAmount;
  }, 0);
  const discountAmount = finalCost-rawCost;
  console.log(rawCost);
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <div className="columns-2 flex">
        <div>
          {filteredArray.map((mug) => {
            return <CartItem mug={mug} key={mug.id} />;
          })}
        </div>
        <div className=" w-5/12 ps-5 flex flex-col items-center">
          <button className="bg-yellow p-3 cursor-pointer rounded-lg w-full text-center">
            checkout
          </button>
          <div className="flex flex-col  p-3 bg-gray mt-3 rounded-lg w-full text-xs  ">
            <div className="flex flex-row justify-between">
              <div>Всего {filteredArray.length} товар-ов </div>
              <div className=" font-bold">{rawCost}₽</div>
            </div>
            <div className="flex flex-row justify-between mt-2">
              <div>Выгода:</div>
              <div className="text-red">{discountAmount}₽</div>
            </div>
            <div className="flex flex-row text-xl font-semibold justify-between mt-4">
              <div className="">Итого</div>
              <div>{finalCost}₽</div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
