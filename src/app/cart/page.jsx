"use client";
import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
// import {
//   MoreProductsConfig,
//   featuredMugsConfig,
// } from "../../../public/Data/configs";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import { selectProductAmount } from "@/redux/features/cart/selector";
import { getDatabase, ref, onValue } from "firebase/database";
import { useState } from "react";
import { useLayoutEffect } from "react";
import { app } from "../firebase/config";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const IS_USER = useSelector(store=>store.user.token)
  const [MoreProductsConfig, setMoreProductsConfig] = useState([]);
  useLayoutEffect(() => {
    const db = getDatabase(app);
    const starCountRef = ref(db, "MoreProductsConfig");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      setMoreProductsConfig(data);
    });
  }, []);
  const [featuredMugsConfig, setFeaturedMugsConfig] = useState([]);
  useLayoutEffect(() => {
    const db = getDatabase(app);
    const starCountRef = ref(db, "FeaturedMugsConfig");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      setFeaturedMugsConfig(data);
    });
  }, []);

  const allProductsRAW = MoreProductsConfig;

  const allProducts = allProductsRAW.reduce((accumulator, currentValue) => {
    if (!accumulator.includes(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);


  const cartItems = useSelector((state) => state.cart);
  const filteredArray = allProducts.filter((obj) =>
    cartItems.hasOwnProperty(obj.id)
  );


  const finalCost = filteredArray.reduce((accumulator, item) => {
    return accumulator + item.price * cartItems[item.id];
  }, 0);

  const rawCost = filteredArray.reduce((accumulator, item) => {
    return item.salePrice !== 'null'||null
      ? accumulator + item.salePrice * cartItems[item.id]
      : accumulator + item.price * cartItems[item.id];
  }, 0);

  const discountAmount = finalCost - rawCost;
!IS_USER&& router.push('/signin')
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <div className=" lg:flex-row flex-col flex">
        <div>
          {filteredArray.map((mug) => {
            return <CartItem mug={mug} key={mug.id} />;
          })}
        </div>
        <div className=" lg:w-5/12 w-full ps-5 flex flex-col items-center">
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
