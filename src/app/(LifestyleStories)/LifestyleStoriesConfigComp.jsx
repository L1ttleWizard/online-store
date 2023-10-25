import React from "react";
import { LifestyleStories } from "./LifestyleStories";
import { getDocs, collection } from "firebase/firestore";
import { database } from "@/firebase/config";

export async function LifestyleConfigComp() {
  let data = {};
  const querySnapshot = await getDocs(collection(database, "StoriesConfig"));
  return (
    <LifestyleStories
      config={querySnapshot.docs.map((doc) =>
        Object.assign(doc.data(), { id: doc.id })
      )}
    />
  );
}
