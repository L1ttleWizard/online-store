"use client"
import { cartActions } from "@/redux/features/cart";
import { selectProductAmount } from "@/redux/features/cart/selector";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MoreProductsConfig,
  featuredMugsConfig,
} from "../../../../public/Data/configs";

const allProductsRAW = MoreProductsConfig.concat(featuredMugsConfig);
const allProducts = allProductsRAW.reduce((accumulator, currentValue) => {
  if (!accumulator.includes(currentValue)) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);


export const CartPlates = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state=> state.cart)
const filteredArray = allProducts.filter((obj) =>
  cartItems.hasOwnProperty(obj.id)
);
  return filteredArray.map((mug, idx) => {
    const PRODUCT_ID = mug.id;
    
    
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
          {!productAmount && (
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
          {Boolean(productAmount) && (
            <button
              onClick={() => {
                dispatch(cartActions.resetThis(PRODUCT_ID));
              }}
            >
              delete item from cart
            </button>
          )}
        </div>
      </div>
    );
  });
};
