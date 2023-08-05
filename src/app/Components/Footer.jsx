import React from "react";
import { SocialsConfig } from "../../../public/Data/configs";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="first-col-flex">
            <img className="logo" src="img/logo.png" alt="logo" />
            <p className="footer-text">
              Delivering the best coffee life since 1996. From coffee geeks to
              the realones.
            </p>
            <p className="copyright">CoffeeStyle Inc. © 1996</p>
          </div>
          <div className="second-col-flex">
            <p className="footer-title">menu</p>
            <ul className="footer-column">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Our Products</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Styleguide</a>
              </li>
            </ul>
          </div>
          <div className="third-col-flex">
            <p className="footer-title">folow us</p>
            <ul className="footer-column">
              <li>
                <a href={SocialsConfig.facebook}>Facebook</a>
              </li>
              <li>
                <a href={SocialsConfig.instagram}>Instagram</a>
              </li>
              <li>
                <a href={SocialsConfig.pinterest}>Pinterest</a>
              </li>
              <li>
                <a href={SocialsConfig.twitter}>Twitter</a>
              </li>
            </ul>
          </div>
          <div className="fourth-col-flex">
            <p className="footer-title">contact us</p>
            <p
              style={{
                margin: 0,
                color: "rgba(29, 31, 46, 0.7)",
                fontSize: 14,
              }}
            >
              We are Always Happy to Help
            </p>
            <a href="#" className="footer-email">
              us@coffeestyle.io
            </a>
            <p className="footer-sponsor">Created by Wizard 2022</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
