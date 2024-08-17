import React from "react";
import { FeaturedMugs } from "./FeaturedMugs";
import { query } from "firebase/database";
import { firestoreDatabase } from "../firebase/config"
import {collection, getDocs} from 'firebase/firestore'

export async function FeaturedMugsConfigComp() {
  const featuredMugsQ = query(collection(firestoreDatabase,'FeaturedMugsConfig'));
  const snapshot = await getDocs(featuredMugsQ);
  const data = [];
   snapshot.forEach((doc)=>data.push(doc.data()));

  if (data.length>0){
    return <FeaturedMugs config={data} />;
  } else {
    return <div>No data available</div>;
  }
}
