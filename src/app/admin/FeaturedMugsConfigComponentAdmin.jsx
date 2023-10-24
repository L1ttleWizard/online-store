"use client";
import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import app from "../firebase/config";
export const revalidate = 1;
export function FeaturedMugsConfigComponentAdmin() {
  const [c, setC] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const starCountRef = ref(db, "FeaturedMugsConfig");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setC(snapshot.val());
    });
  }, []);
  return <MugsConfig mugsConfig={c} />;
}

const MugsConfig = ({ mugsConfig }) => {
  return mugsConfig.map((mug, idx) => {
    return <Plate key={mug.id} mug={mug} />;
  });
};
const Plate = ({ key, mug }) => {
  return (
    <div className="flex flex-row justify-between mt-2">
      <div className="flex flex-row gap-x-3 items-center mx-4 text-center mx-5">
        <div>Image</div>
        <img src={mug.img.url} alt={mug.img.alt} className="rounded-xl w-14" />
      </div>
      <div className="flex flex-row gap-x-3 text-center mx-5">
        <div>Name:</div>
        <p>{mug.name}</p>
      </div>
      <div className="flex flex-row gap-x-3 text-center mx-5">
        <div>Price:</div>
        <p>
          <span>{mug.price} ₽</span>
        </p>
      </div>
      <div className="flex flex-row gap-x-3 mx-4 text-center mx-5">
        <div>SalePrice:</div>
        <p>
          <span>{mug.salePrice} ₽</span>
        </p>
      </div>
    </div>
    
  );
};
