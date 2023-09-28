"use client";
import React from "react";
import { Story } from "./Components/Story";
import { AfterHeader } from "./Components/AfterHeader";
import { Magazine } from "./Components/Magazine";
import { Parallax } from "./Components/Parallax";
import { LifestyleStories } from "./(LifestyleStories)/LifestyleStories";
import { Form } from "./Components/Form";
import { FeaturedMugs } from "./(FeaturedMugs)/FeaturedMugs";
import { MoreProducts } from "./(MoreProducts)/MoreProducts";
import { useDispatch, useSelector } from "react-redux";
import { ScaleLoader } from "react-spinners";
import { useEffect } from "react";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Example } from "./Components/Example";

export const Main = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);
  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <div>df</div>
   
    
  );
};
