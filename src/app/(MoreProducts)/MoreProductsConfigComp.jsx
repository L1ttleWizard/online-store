import React from "react";  
import { child, get, getDatabase, ref, getDocs, collection } from "firebase/firestore";
import { app } from "../firebase/config";
import { database } from "@/firebase/config";
import { MoreProducts } from "./MoreProducts";

export async function MoreProductsConfigComp() {

  let data = {};
  const querySnapshot = await getDocs(
    collection(database, "MoreProductsConfig")
  );
    return <MoreProducts config={ querySnapshot.docs.map(doc => Object.assign(doc.data(), {id: doc.id}))} />;
  
}