import React from "react";
import { MugPlates } from "./MugPlates";

export const FeaturedMugs = ({config}) => {
  return (
    <section id="products" className="feature-mugs">
      <div className="container">
        <h2 className="feature-mugs title mb-5">featured mugs</h2>
        <div className=" flex-wrapper">
          <MugPlates featuredMugsConfig={config}  />
        </div>
      </div>
    </section>
  );
};
