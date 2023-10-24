"use client";
import React from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import app from "../firebase/config";
import { Story } from "./Story";
import { collection, getDocs } from "firebase/firestore";
import { database } from "@/firebase/config";

export async function StoryConfigComponent() {
  const querySnapshot = await getDocs(collection(database, "StoryConfig"));
  querySnapshot.forEach((doc) => {
    const d= doc.data();
    console.log(d);
    // return <Story storyConfig={doc.data()} />;
    return (
      <>
        <div>{d.content}</div>
        <div>{d.quote}</div>
      </>
    );
  });
}
