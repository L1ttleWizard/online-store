import Link from "next/link";
import React from "react";
import { headerConfig } from "../../../public/Data/configs";

export const Header = () => {
  const HeaderComp = ({ name, url }) => {
    return (
      <li>
        <a href={url} className="tab">
          {name}
        </a>
      </li>
    );
  };
  return (
    <header className="header">
      <div className="container">
        <nav>
          <img src="img/logo.png" alt="Coffee Style" />
          <ul>
            {headerConfig.map((item, idx) => (
              <HeaderComp key={idx} name={item.name} url={item.url} />
            ))}
          </ul>
          <a href="#" className="cart">
            <img
              src="img/cart icon.png"
              style={{ width: 16, height: 20, marginRight: 10 }}
              alt="cart"
            />
            <p>cart</p>
            <span>0</span>
          </a>
        </nav>
      </div>
    </header>
  );
};
