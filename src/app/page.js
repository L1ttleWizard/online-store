"use client";
import "./style.css";
import { selectProductAmount } from "@/redux/features/cart/selector";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { MainContent } from "./Components/CartActionPlate";
import { StoreRenderer } from "./Components/StoreRenderer";
import { Header } from "./Components/Header";
import { Story } from "./Components/Story";
import { FeaturedMugs } from "./(FeaturedMugs)/FeaturedMugs";
import { AfterHeader } from "./Components/AfterHeader";
import { MoreProducts } from "./(MoreProducts)/MoreProducts";
import { Magazine } from "./Components/Magazine";
import { Paralax, Parallax, Parralax } from "./Components/Parallax";
import { LifestyleStories } from "./(LifestyleStories)/LifestyleStories";
import { Form } from "./Components/Form";
import { Footer } from "./Components/Footer";
import { createContext } from "react";
import { CartOverlay } from "./Components/(Cart)/CartOverlay";

export default function Home() {
  const cartOpen = useSelector((state)=> state.switch.active);
 
  return (
    <div className=" ml-20 mr-20">
      <Header />
      {cartOpen&&<CartOverlay />}
      
      <AfterHeader />
      <Story />
      <FeaturedMugs />
      <MoreProducts />
      <Magazine />
      <Parallax />
      <LifestyleStories />
      <Form />
      <Footer />
    </div>
  );
}
