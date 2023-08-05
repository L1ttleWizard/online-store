import React from "react";
import { MoreProductsConfig } from "../../../public/Data/configs";

export const MugPlates = () => {
  return MoreProductsConfig.map((mug,idx) => {
    return (
      <div className={`mug--${mug.onSale?"standard":"onsale"}--common wow slideInUp`} data-wow-offset={3} key={idx} >
        {mug.onSale&&<span className="mug-sale">On sale.</span>}
        <div className="overlay" />
        <img src={mug.img.url} alt={mug.img.alt} />
        <a href="#" className="visuallyhidden">
          explore mug
        </a>
        <p className="mug-subtext">{mug.name}</p>
        <div className="cost-wrapper">
          {mug.onSale&&<span className="cost-sale">₽{mug.salePrice} RUR</span>}
          <span className="cost-standard">₽{mug.price} RUR</span>
        </div>
      </div>
    );
  });
};
