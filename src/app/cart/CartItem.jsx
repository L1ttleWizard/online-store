/* eslint-disable @next/next/no-img-element */
import { selectProductAmount } from "@/redux/features/cart/selector";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/redux/features/cart";
import { FaXmark } from "react-icons/fa6";
export const CartItem = ({ mug }) => {
  const PRODUCT_ID = mug.id;
  const dispatch = useDispatch();
  const productAmount = useSelector((state) =>
    selectProductAmount(state, PRODUCT_ID)
  );
  return (
    <div className="flex align-center  gap-x-28 justify-between flex-shrink mb-3 border-b-2 pb-3 border-gray">
      <div className="flex flex-row gap-x-5 grow">
        <img
          src={mug.img.url}
          alt={mug.img.alt}
          className="w-32 rounded-xl aspect-square h-32"
        />

        <div className="flex flex-col justify-between">
          <p className=" font-medium align-top ">{mug.name}</p>
          {Boolean(productAmount) && (
            <button
              className="delete-cart"
              onClick={() => {
                dispatch(cartActions.resetThis(PRODUCT_ID));
              }}
            >
              <FaXmark size={"1.5em"} color="gray" />
            </button>
          )}
        </div>
        <div className="flex flex-col justify-start ml-auto">
          <span className={`cost standard ${mug.onSale && "text-red"}`}>
            {mug.price} <span className="font-sm ">₽</span>
          </span>
          {mug.onSale && (
            <span className="cost-sale line-through decoration-red decoration-2">
              {mug.salePrice} <span className="font-xs">₽</span>
            </span>
          )}
          <div className=" mt-auto">
            {!productAmount && (
              <button
                className="add-cart"
                onClick={() => dispatch(cartActions.increment(PRODUCT_ID))}
              >
                Add item to cart
              </button>
            )}
            {Boolean(productAmount) && (
              <div className="flex flex-row gap-x-3 justify-between bg-gray rounded-md px-4 py-1 w-28">
                <button
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
    </div>
  );
};
