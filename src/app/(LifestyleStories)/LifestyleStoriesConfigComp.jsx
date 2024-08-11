import React from "react";  
import {collection, getDocs} from 'firebase/firestore';
import { app, firestoreDatabase } from "../firebase/config";
import { LifestyleStories } from "./LifestyleStories";
import { getFirestoreCollection } from "../utils/getFirestoreData";


export async function LifestyleConfigComp() {
  const data = await getFirestoreCollection('StoriesConfig');
  if (data) {
    return <LifestyleStories config={data} />;
  } 
}
