import { FaXmark } from "react-icons/fa6";
import React from "react";
import { MoreProductsConfig } from "../../../public/Data/configs";
import { useDispatch, useSelector } from "react-redux";
import { selectProductAmount } from "@/redux/features/cart/selector";
import { cartActions } from "@/redux/features/cart";
import Image from "next/image";

const Plate = ({ mug }) => {
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
      <img src={mug.img.url} alt={mug.img.alt} />

      <p className="mug-subtext">{mug.name}</p>
      <div className="flex flex-row justify-center gap-x-3 items-baseline ">
        <div className="cost-wrapper">
          <span className={`cost-standard ${mug.onSale && "sale"} mr-2`}>
            {mug.price} ₽
          </span>
          {mug.onSale && <span className="cost-sale">{mug.salePrice} ₽</span>}
        </div>
        <div>
          {!Boolean(productAmount) && (
            <button
              className="add-cart"
              onClick={() => dispatch(cartActions.increment(PRODUCT_ID))}
            >
              Add item to cart
            </button>
          )}
          {Boolean(productAmount) && (
            <div className=" bg-gray flex flex-row justify-between w-28 px-5 items-center mt-auto mb-auto rounded-lg">
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
      </div>
    </div>
  );
};

export const MugPlates = () => {
  return MoreProductsConfig.map((mug, idx) => {
    return <Plate mug={mug} key={mug.id} />;
  });
};
