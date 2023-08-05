"use client";
import { selectProductAmount } from "@/redux/features/cart/selector";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { MainContent } from "./Components/CartActionPlate";
import { StoreRenderer } from "./Components/StoreRenderer";
import { Header } from "./Components/Header";
import { Story } from "./Components/Story";
import { FeaturedMugs } from "./Components/(FeaturedMugs)/FeaturedMugs";

export default function Home() {
  return (
    <div className=" ml-20 mr-20">
      <Header/>
      <Story/>
      <FeaturedMugs/>
      <StoreRenderer />
    </div>
  );
}
