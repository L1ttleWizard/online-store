import React from "react";
import { getDocs, collection } from "firebase/firestore";
import { database } from "@/firebase/config";
import { MoreProducts } from "./MoreProducts";

export async function MoreProductsConfigComp() {
  let data = {};
  const querySnapshot = await getDocs(
    collection(database, "MoreProductsConfig")
  );
  return (
    <MoreProducts
      config={querySnapshot.docs.map((doc) =>
        Object.assign(doc.data(), { id: doc.id })
      )}
    />
  );
}
