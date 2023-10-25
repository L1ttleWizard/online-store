import React from "react";
import { collection, getDocs, getStorage } from "firebase/firestore";
import { database } from "@/firebase/config";
import { FeaturedMugs } from "./FeaturedMugs";
import { MugPlates } from "./MugPlates";

export async function FeaturedMugsConfigComp() {
  let data = {};
  const querySnapshot = await getDocs(
    collection(database, "FeaturedMugsConfig")
  );
    return <FeaturedMugs config={ querySnapshot.docs.map(doc => Object.assign(doc.data(), {id: doc.id}))} />;
  
}