"use client"
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
// import { StoriesConfig } from "../../../public/Data/configs";
export const Stories = () => {
  const [StoriesConfig,setStoriesConfig] = useState([])
  useEffect(()=>{
    const dbRef = ref(getDatabase());
get(child(dbRef, `StoriesConfig`)).then((snapshot) => {
  if (snapshot.exists()) {
    setStoriesConfig(Object.values(snapshot.val()));
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
  },[])
  return (
    <>
      {StoriesConfig.map((story, idx) => {
        return (
          <div
            className="lifestyle-item wow slideInUp"
            data-wow-offset={3}
            key={idx}
          >
            <a href="#" className={`third-block-story lifestyle-image bg-cover`}>
              <div className="mask" />
              <span className="lifestyle-button">read the full story</span>
            </a>
            <a href="#" className="lifestyle-subtitle">
              {story.subtitle}
            </a>
            <p className="lifestyle-content">{story.content}</p>
            <span className="date">{story.date}</span>
          </div>
        );
      })}
    </>
  );
};
