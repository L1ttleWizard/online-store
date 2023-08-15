import React from "react";
import { Dataset } from "../../../public/Data/product_data";
import { useDispatch, useSelector } from "react-redux";
import { selectProductAmount } from "@/redux/features/cart/selector";
import { cartActions } from "@/redux/features/cart";
import { off, on, toggle } from "@/redux/features/switch";

export const StoreRenderer = (prop) => {
  const Plate = ({ prop }) => {
    const PRODUCT_ID = prop.id;
    const dispatch = useDispatch();
    const productAmount = useSelector((state) =>
      selectProductAmount(state, PRODUCT_ID)
    );

    return (
      <div className=" bg-slate-500 w-2/6 h-2/6 rounded-2xl flex flex-col justify-center align-middle gap-y-5 p-3 text-center ">
        <img
          className=""
          src={prop.img.url}
          alt={prop.img.alt}
          width={`${prop.img.width}`}
          height={`${prop.img.height}`}
        />
        <h1 className="">{prop.name}</h1>
        <p>{prop.description}</p>
        {prop.isSale && <div>Sale!</div>}
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
        <div>current</div>
        <button
          onClick={() => {
            dispatch(on());
          }}
        >
          on
        </button>
        <button
          onClick={() => {
            dispatch(off());
          }}
        >
          off
        </button>
        <button
          onClick={() => {
            dispatch(toggle());
          }}
        >
          toggle
        </button>
      </div>
    );
  };

  const Plates = Dataset.map((item) => {
    return <Plate key={item.id} prop={item} className="" />;
  });

  return (
    <div className=" flex flex-row flex-wrap justify-center gap-x-5">
      {Plates}
    </div>
  );
};
