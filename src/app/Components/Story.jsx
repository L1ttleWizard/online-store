import React, { useLayoutEffect } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../firebase/config";
import { data } from "autoprefixer";
// import { storyConfig } from "../../../public/Data/configs";

export const Story = () => {
  const [storyConfig, setStoryConfig] = useState([]);
  useLayoutEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "StoryConfig");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setStoryConfig(data);
    });
  }, [data]);

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
