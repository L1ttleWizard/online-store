import React from "react";
import { Story } from "./Story";
import { collection, getDocs } from "firebase/firestore";
import { database } from "@/firebase/config";

export async function StoryConfigComponent() {
  let data = {};
  const querySnapshot = await getDocs(collection(database, "StoryConfig"));
  querySnapshot.forEach((doc) => {
    data = doc.data();
  });
  return <Story storyConfig={data} />;
}
