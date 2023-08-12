"use client";
import { selectProductAmount } from "@/redux/features/cart/selector";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartPlate } from "./CartPlate";
export default function Home() {
  
  const dispatch = useDispatch();
  const productAmount = useSelector((state) => state
  
);
return (
  <div>
    <CartPlate/>
  </div>
)
}
