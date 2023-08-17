import { selectProductAmount } from "@/redux/features/cart/selector";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/redux/features/cart";
export const    CartItem = ({mug}) => {
    const PRODUCT_ID = mug.id;
    const dispatch = useDispatch();
    const productAmount = useSelector((state) =>
    selectProductAmount(state, PRODUCT_ID)
  );

    console.log('mug.img.url :>> ', mug);
  return (
      
        <div
          className={`mug--${
            mug.onSale ? "standard" : "onsale"
          }--big wow slideInUp`}
          data-wow-offset={3}
          
        >
          {mug.onSale && <span className="mug-sale">On sale.</span>}
          <div className="overlay" />
          <img src={mug.img.url} alt={mug.img.alt}/>
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
  };
  