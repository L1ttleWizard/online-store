"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { CartOverlay } from "./(Cart)/CartOverlay";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "@/redux/features/switch";
import { StoreLength } from "../utils/store.length";

import { launchAuth } from "../firebase/firebaseui";
const headerConfig = [
  {
    name: "home",
    url: "/",
  },
  {
    name: "products",
    url: "/#products",
  },
  {
    name: "blog",
    url: "#",
  },
  {
    name: "about",
    url: "#",
  },
  {
    name: "contact",
    url: "#",
  },
  {
    name: "styleguide",
    url: "#",
  },
];
export const Header = () => {
  const userData = useSelector((state)=>state.user);
  

  const HeaderComp = ({ name, url }) => {
    return (
      <li>
        <a href={url} className="tab">
          {name}
        </a>
      </li>
    );
  };
  const [openState, setOpenState] = useState(0);
  return (
    <header className="header bg-white">
      <div className="">
        <nav className="container">
          <Link href="/">
            <img src="img/logo.png" alt="Coffee Style" className=" w-28" />
          </Link>
          <ul
            className={`lg:flex ${
              !openState ? `hidden` : ""
            } flex-col lg:flex-row `}
          >
            {headerConfig.map((item, idx) => (
              <HeaderComp key={idx} name={item.name} url={item.url} />
            ))}
          </ul>
          {/* <a href="#" className="cart" onClick={()=>{dispatch(toggle())}} > */}
          <Link href={"cart"} className="cart">
            <img
              src="img/cart icon.png"
              style={{ width: 16, height: 20, marginRight: 10 }}
              alt="cart"
            />
            <p>cart</p>
            <span>{StoreLength()}</span>
          </Link>
          <a
            className="ml-6 block lg:hidden z-50 cursor-pointer"
            onClick={() => {
              setOpenState(!openState);
            }}
          >
            <img src="img/nenu icon.png" className=" w-5"></img>
          </a>
          <div id ='firebase-auth-container '></div>
          <Link href={"#"} className=" ml-1">
            <img
              src={`${userData?userData.photoURL:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAzFBMVEVHcEz////////+/v77+/vx8fL9/f309fX+/v739/f////09PXOz8/5+vr8/P3////////29vf///////84qlf8wAdGiPX8/PzsUUTqQjQsqFLrSj3S3/w6g/TqPCs0gPQgpUf85+bv9P+63sL62Nb+8ef4ycbw+PJkunkeePP81HXwgGv0jhzc5/3o9efX7N5Fr19Uj/WQy562zPr2trL94KDzoJrzoJv80Gjyl5H94qgyh9v7xzihsSp+wYV1sE5ZtXBmmvUynoWKrvzKDGT6AAAAE3RSTlMAW+TTeBLcHLMt1WsKzfUznkBIxSDAuAAAAUZJREFUKJFtktligkAMRUFZxKVuDMOAggpu1apVu+/t//9TkxBU1PsySQ4hlyGadpTd0fWOrV2R3eqyWhe80j1RpYCc7pmcI2tyaZimQw6bOTMplU9hpKIofJSUmgwtTCYq9EFhqKIJ5lbGdGIRAGhUQLNX6wRLOA2Y8vdpuvfVOJtaOjhdhL56yYrjU8cGFsRSLc4/x+DPfxBiSZN6LMlXUYXzVghBT8/7pPkdxFX28yzEO8HYI8U9dlQudMZx3AeInWWe+SrExxrhCLTre3E+M3P7FXznLn887z53a2PwGbjBLLvUP2jcYUC/FYdOA9d1g22SbN1fbizT9bUxXA+QguB4G2GlfbIFqw1i0GCzKmzDDQ1LZgPQLKHk5rAJpmSj0ykH0jxArW4V79yqF1bMkEckjYvFrTWIy0btApFsx7m68Ff1D4OdMHbngtKsAAAAAElFTkSuQmCCF'}`}
              style={{ width: 16, height: 20, marginRight: 10 }}
              alt="cart"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};
