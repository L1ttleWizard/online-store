import React from "react";
import { featuredMugsConfig } from "../../../public/Data/configs";
import { useDispatch, useSelector } from "react-redux";
import { selectProductAmount } from "@/redux/features/cart/selector";
import { cartActions } from "@/redux/features/cart";
export const MugPlates = () => {
  return featuredMugsConfig.map((mug, idx) => {
    const PRODUCT_ID = mug.id;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const productAmount = useSelector((state) =>
      selectProductAmount(state, PRODUCT_ID)
    );
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
        <div>
          {!Boolean(productAmount) && (
            <button onClick={() => dispatch(cartActions.increment(PRODUCT_ID))}>
              Add item to cart
            </button>
          )}
          {productAmount && (
            <button onClick={() => dispatch(cartActions.increment(PRODUCT_ID))}>
              +
            </button>
          )}
          {productAmount && (
            <button onClick={() => dispatch(cartActions.decrement(PRODUCT_ID))}>
              -
            </button>
          )}
          {Boolean(productAmount) && (
            <div>Currently in cart:{productAmount}</div>
          )}
        </div>
      </div>
    );
  });
};
