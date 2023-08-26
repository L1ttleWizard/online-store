"use client";
import { getDatabase, ref, child, get } from "firebase/database";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import { storyConfig } from "../../../public/Data/configs";

export const Story = () => {
    const [storyConfig,setStoryConfig] = useState([]);
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "StoryConfig"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setStoryConfig(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },[]);
  return (
    <section className="wow slideInUp our_story" data-wow-offset={3}>
      <div className="container" style={{ textAlign: "center" }}>
        <div className="content-wrap">
          <h2>{storyConfig.quote}</h2>
          <p>{storyConfig.content}</p>
          <a href={storyConfig.storyLink} style={{ color: "#a25f4b" }}>
            Read the full Story
          </a>
        </div>
      </div>
    </section>
  );
};
