import React from "react";  
import { MoreProducts } from "./MoreProducts";
import { app, firestoreDatabase } from "../firebase/config"
import {collection, getDocs} from 'firebase/firestore'
import { query } from "firebase/database";

export async function MoreProductsConfigComp() {
  const moreProductsQ =  query(collection(firestoreDatabase,'MoreProductsConfig'));
  const snapshot = await getDocs(moreProductsQ);
  const data = [];
  snapshot.forEach(doc=>data.push(doc.data()));
  if (data.length > 0) {
    return <MoreProducts config={data} />;
  } else {
    return <div>No data available</div>;
  }
}
