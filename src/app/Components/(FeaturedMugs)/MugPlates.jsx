import React from "react";
import { featuredMugsConfig } from "../../../../public/Data/configs";

return featuredMugsConfig.map((mug) => {
  return (
    <div
      className={`mug--${
        mug.onSale ? "standard" : "onsale"
      }--big wow slideInUp`}
      data-wow-offset={3}
    >
      {mug.onSale && <span className="mug-sale">On sale.</span>}
      <div className="overlay" />
      <img src="img/pink premium ceramic.jpg" alt="pink mug" />
      <p className="mug-subtext">Pink Premium Ceramic</p>
      <div className="cost-wrapper">
        <span className="cost-standard">$ 99.00 USD</span>
      </div>
      <a href="#" className="visuallyhidden">
        explore mug
      </a>
      <p className="mug-subtext">Golden Designers Mug</p>
      <div className="cost-wrapper">
        <span className="cost-sale">$50.00 USD</span>
        <span className="cost-standard">$ 69.00 USD</span>
      </div>
    </div>
    //сделать обработку тут
  );
});
