"use client";
import React from "react";
import { FaXmark } from "react-icons/fa6";
// import { featuredMugsConfig } from "../../../public/Data/configs";
import { getDatabase, ref, child, get } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { selectProductAmount } from "@/redux/features/cart/selector";
import { cartActions } from "@/redux/features/cart";
import { useEffect } from "react";
import { useState } from "react";

const Plate = ({mug}) => {
  const PRODUCT_ID = mug.id
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const productAmount = useSelector((state) =>
    selectProductAmount(state, PRODUCT_ID)
  );
  return (
    <div
      className={`mug--${
        mug.onSale ? "standard" : "onsale"
      }--big wow slideInUp mb-3`}
      data-wow-offset={3}
      
    >
      {mug.onSale && <span className="mug-sale">On sale.</span>}
      <div className="overlay" />
      <img src={mug.img.url} alt={mug.img.alt} />
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
          <div className="controls-wrapper">
            <button onClick={() => dispatch(cartActions.decrement(PRODUCT_ID))}>
              -
            </button>
            <div>{productAmount}</div>
            <button onClick={() => dispatch(cartActions.increment(PRODUCT_ID))}>
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
    </div>
  );
};

export const MugPlates = () => {
  const [featuredMugsConfig, setFeaturedMugsConfig] = useState([]);
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "FeaturedMugsConfig"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setFeaturedMugsConfig(Object.values(snapshot.val()));
          console.log(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },[]);

  return featuredMugsConfig.map((mug, idx) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return <Plate key={mug.id} mug={mug} />;
  });
};
