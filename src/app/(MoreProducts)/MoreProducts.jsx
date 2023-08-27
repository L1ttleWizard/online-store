import React from "react";
import { MugPlates } from "./MugPlates";

export const MoreProducts = () => {
  return (
    <section className="more-products">
      <div className="container">
        <h2 className="title mb-3">more products</h2>
        <div className="more-products-inner items-baseline">
          <MugPlates />
        </div>
      </div>
    </section>
  );
};
