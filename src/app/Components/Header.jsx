"use client";
import 'animate.css'
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import { headerConfig } from "../../../public/Data/configs";
import { CartOverlay } from "./(Cart)/CartOverlay";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "@/redux/features/switch";
import { StoreLength } from "../utils/store.length";

export const Header = () => {
  const dispatch = useDispatch();

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
        </nav>
      </div>
    </header>
  );
};
