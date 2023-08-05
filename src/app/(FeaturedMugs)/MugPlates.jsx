import React from "react";
import { featuredMugsConfig } from "../../../public/Data/configs";
export const MugPlates = () => {
  return featuredMugsConfig.map((mug, idx) => {
    return (
      <div
        className={`mug--${
          mug.onSale ? "standard" : "onsale"
        }--big wow slideInUp`}
        data-wow-offset={3}
        key={idx}
      >
        {mug.onSale && <span className="mug-sale">On sale.</span>}
        <div className="overlay" />
        <img src={mug.img.url} alt={mug.img.alt} />
        <p className="mug-subtext">{mug.name}</p>
        <div className="cost-wrapper">
          <span className="cost-standard">₽{mug.price} RUR</span>
          {mug.onSale && (
            <span className="cost-sale">₽{mug.salePrice} RUR</span>
          )}
        </div>
        <a href="#" className="visuallyhidden">
          explore mug
        </a>
      </div>
    );
  });
};
