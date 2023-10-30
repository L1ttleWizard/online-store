"use client";
import React, { useEffect, useState } from "react";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import app from "../../firebase/config";
import { database } from "@/firebase/config";
export const revalidate = 1;
export function StoryConfigComponentAdmin() {
  const [c, setC] = useState([]);

  useEffect(() => {
    const q = query(collection(database, "StoryConfig"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const config = [];
      querySnapshot.forEach((doc) => {
        setC(doc.data());
      });
    });
  }, []);
  return <Story storyConfig={c} />;
}

const Story = ({ storyConfig }) => {
  return (
    <section>
      <div className=" flex flex-col">
        <p>Story Quote: {storyConfig.quote}</p>
        <p>StoryContent: {storyConfig.content}</p>
      </div>
    </section>
  );
};
