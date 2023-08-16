"use client"

import React from "react";
import { MagazineConfig } from "../../../public/Data/configs";

export const Magazine = () => {
  return (
    <section className="wow slideInUp magazine" data-wow-offset={3}>
      <div className="container">
        <h2 className="magazine-title--title">
          buy 2 mugs and get a scoffee magazine free
        </h2>
        <div className="outer-flex">
          <div className="img-flex">
            {MagazineConfig.map((img, idx) => {
              return <img key={idx} src={img.url} alt={img.alt}></img>;
            })}
          </div>
          <div className="content-flex">
            <div className="magazine-content">
              <span className="premium--title">premium offer</span>
              <h2 className="coffee-magazine">Get our Coffee Magazine</h2>
              <p className="just-text">
                The most versatile furniture system ever created.
                <br />
                Designed to fit your life.
              </p>
              <a className="black-button" href="#">
                start shopping
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
