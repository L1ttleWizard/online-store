"use client";
import { selectProductAmount } from "@/redux/features/cart/selector";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Home() {
  const dispatch = useDispatch();
  const productAmount = useSelector((state) => state
  
);
console.log(productAmount)
return <div>some text</div>
}
