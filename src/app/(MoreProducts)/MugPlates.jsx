"use client";
import React from "react";
// import { MoreProductsConfig } from "../../../public/Data/configs";
import { useDispatch, useSelector } from "react-redux";
import { selectProductAmount } from "@/redux/features/cart/selector";
import { cartActions } from "@/redux/features/cart";
const Plate = ({ mug }) => {
  const IS_USER = useSelector((store) => store.user.token);
  

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
      }--common wow slideInUp mb-5 w-full lg:w-2/5`}
      data-wow-offset={3}
    >
      {mug.onSale && <span className="mug-sale">On sale.</span>}
      <div className="overlay" />
      <img src={mug.url} alt={mug.alt} className=" rounded-xl" />

      <p className="mug-subtext">{mug.name}</p>
      <div className="flex flex-row justify-center gap-x-3 items-baseline ">
        <div className="cost-wrapper">
          <span className={`cost-standard ${mug.onSale && "sale"} mr-2`}>
            {mug.price} ₽
          </span>
          {mug.onSale && <span className="cost-sale">{mug.salePrice} ₽</span>}
        </div>
        {IS_USER && (
          <div>
            {!productAmount && (
              <button
                className="add-cart"
                onClick={() => dispatch(cartActions.increment(PRODUCT_ID))}
              >
                Add item to cart
              </button>
            )}
            {Boolean(productAmount) && (
              <div className=" bg-gray flex flex-row justify-between w-28 px-5  py-1 items-center mt-auto mb-auto rounded-lg">
                <button
                  className=""
                  onClick={() => dispatch(cartActions.decrement(PRODUCT_ID))}
                >
                  -
                </button>
                <div>{productAmount}</div>
                <button
                  onClick={() => dispatch(cartActions.increment(PRODUCT_ID))}
                >
                  +
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export const MugPlates = ({ MoreProductsConfig }) => {
  return MoreProductsConfig.map((mug) => {
    return <Plate mug={mug} key={mug.id} />;
  });
};
