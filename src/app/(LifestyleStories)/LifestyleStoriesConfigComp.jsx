import React from "react";  
import { child, get, getDatabase, ref } from "firebase/database";
import { app } from "../firebase/config";
import { LifestyleStories } from "./LifestyleStories";


export async function LifestyleConfigComp() {
  const dbRef = ref(getDatabase(app));
  const snapshot = await get(child(dbRef, "StoriesConfig"));

  if (snapshot.exists()) {
    const data = snapshot.val();
    return <LifestyleStories config={data} />;
  } else {
    return <div>No data available</div>;
  }
}
