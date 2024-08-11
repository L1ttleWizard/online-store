import React from "react";
import { FeaturedMugs } from "./FeaturedMugs";
import { child, get, getDatabase, query, ref } from "firebase/database";
import { app, firestoreDatabase } from "../firebase/config"
import {collection, doc, getDoc, getDocs} from 'firebase/firestore'

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
