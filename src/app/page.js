"use client";
import "./style.css";
import { useSelector } from "react-redux";
import { StoreRenderer } from "./Components/StoreRenderer";
import { Header } from "./Components/Header";
import { Story } from "./Components/Story";
import { AfterHeader } from "./Components/AfterHeader";
import { Magazine } from "./Components/Magazine";
import { Parallax } from "./Components/Parallax";
import { LifestyleStories } from "./(LifestyleStories)/LifestyleStories";
import { Form } from "./Components/Form";
import { Footer } from "./Components/Footer";
import { FeaturedMugs } from "./(FeaturedMugs)/FeaturedMugs";
import { MoreProducts } from "./(MoreProducts)/MoreProducts";
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
