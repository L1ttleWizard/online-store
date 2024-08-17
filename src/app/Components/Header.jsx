"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CartOverlay } from "./(Cart)/CartOverlay";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "@/redux/features/switch";
import { StoreLength } from "../utils/store.length";

import { launchAuth } from "../firebase/firebaseui";
import { Button } from "@mui/material";
import { selectSum } from "@/redux/features/cart/selector";
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

  const len = useSelector(state=>Object.keys(state.cart).length);
  const [stlenState, setStlenState] = useState();
 
  useEffect(() => {
    setStlenState(len);
  }, [len]);

  const userData = useSelector((state) => state.user);
  
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
          {userData.token ? (
            <>
              <Link href={"cart"} className="cart">
                <img
                  src="img/cart icon.png"
                  style={{ width: 16, height: 20, marginRight: 10 }}
                  alt="cart"
                />
                <p>cart</p>
                <span>
                  {stlenState}
                </span>
              </Link>
            </>
          ) : (
            <Button variant="outlined " className="flex justify-end">
              <Link href="/signin" className="">
                Login
              </Link>
            </Button>
          )}
          <a
            className="ml-6 block lg:hidden z-50 cursor-pointer"
            onClick={() => {
              setOpenState(!openState);
            }}
          >
            <img src="img/nenu icon.png" className=" w-5"></img>
          </a>
          <div id="firebase-auth-container "></div>
          {userData.name && (
            <button className="flex rounded-lg p-0">
              <Link href={"/signin"} className=" ml-1">
                <img
                  src={`${userData.name && userData.photoURL}`}
                  style={{ width: 16, height: 20, marginRight: 10 }}
                  alt="cart"
                />
              </Link>
            </button>
          )}
          <div></div>{" "}
        </nav>
      </div>
    </header>
  );
};
