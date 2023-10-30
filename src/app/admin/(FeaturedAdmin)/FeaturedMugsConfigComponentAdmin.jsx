"use client";
import { getStorage, ref } from "firebase/storage";
import {
  collection,
  query,
  where,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import app from "../../firebase/config";
import { database } from "@/firebase/config";
export const revalidate = 1;
const storage = getStorage(app);
const storageRef = ref(storage);
const imagesRef = ref(storageRef, "img");

export async function FeaturedMugsConfigComponentAdmin() {
  let data = {};
  const querySnapshot = await getDocs(
    collection(database, "FeaturedMugsConfig")
  );
  return (
    <MugsConfig
      mugsConfig={querySnapshot.docs.map((doc) =>
        Object.assign(doc.data(), { id: doc.id })
      )}
    />
  );
}

const MugsConfig = ({ mugsConfig }) => {
  console.log(mugsConfig);
  return( mugsConfig.map((mug, idx) => {
    return (
      <>
        <Plate key={mug.id} mug={mug} />
      </>
    );
  }));  
};

const Plate = ({ key, mug }) => {
  return (
    <>
      <div className="flex flex-row justify-between mt-2">
        <div className="flex flex-row gap-x-3 items-center mx-4 text-center mx-5">
          <div>Image</div>
          <img
            src={ref(imagesRef, `${mug.url}`).fullPath}
            alt={mug.alt}
            className="rounded-xl w-14"
          />
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
    </>
  );
};
