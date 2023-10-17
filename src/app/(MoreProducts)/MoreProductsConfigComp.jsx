import React from "react";  
import { child, get, getDatabase, ref } from "firebase/database";
import { app } from "../firebase/config";
import { MoreProducts } from "./MoreProducts";

export async function MoreProductsConfigComp() {
  const dbRef = ref(getDatabase(app));
  const snapshot = await get(child(dbRef, "MoreProductsConfig"));

  if (snapshot.exists()) {
    const data = snapshot.val();
    return <MoreProducts config={data} />;
  } else {
    return <div>No data available</div>;
  }
}
