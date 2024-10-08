/* eslint-disable react/prop-types */
"use client";
import React, { useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { selectProductAmount } from "@/redux/features/cart/selector";
import { cartActions, updateStore } from "@/redux/features/cart";
import { doc, getDoc } from "firebase/firestore";
import { firestoreDatabase } from "../firebase/config";

export const MugPlates = ({ featuredMugsConfig }) => {
  return featuredMugsConfig.map((mug) => {
    return <Plate key={mug.id} mug={mug} />;
  });
};

const Plate = ({ mug }) => {
  const IS_USER = useSelector((store) => {
    return store.user.token;
  });
  const PRODUCT_ID = mug.id;
  const dispatch = useDispatch();
  const productAmount = useSelector((state) =>
    selectProductAmount(state, PRODUCT_ID)
  );

  const token = useSelector((state) => state.user.token);
  const handleCartUpdate = async (actoken) => {
    if (actoken) {
      const docRef = doc(firestoreDatabase, "usersData", `${actoken}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        dispatch(updateStore(docSnap.data()));
        console.log("store updated successfully");
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!", actoken);
      }
    }
  };
  useEffect(() => {
    handleCartUpdate(token);
  }, []);
  return (
    <div
      className={`mug--${
        mug.onSale ? "standard" : "onsale"
      }--big wow slideInUp mb-3`}
      data-wow-offset={3}
    >
      {mug.onSale && <span className="mug-sale">On sale.</span>}
      <div className="overlay" />
      <img src={mug.url} alt={mug.alt} className="rounded-xl" />
      <p className="mug-subtext">{mug.name}</p>
      <div className="cost-wrapper">
        <span className={`cost-standard ${mug.onSale && "sale"}`}>
          {mug.price} ₽
        </span>
        {mug.onSale && (
          <span className="cost-sale ml-2 line-through decoration-2 decoration-red">
            {mug.salePrice} ₽
          </span>
        )}
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
            <div className="controls-wrapper">
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

          {Boolean(productAmount) && (
            <button
              className="delete-cart"
              onClick={() => {
                dispatch(cartActions.resetThis(PRODUCT_ID));
              }}
            >
              <FaXmark />
            </button>
          )}
        </div>
      )}
    </div>
  );
};
