"use client";
import React, { useEffect, useState } from "react";
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import app from "../firebase/config";
export const revalidate = 1;
export function StoryConfigComponentAdmin() {
  const [c, setC] = useState([]);

  useEffect(() => {
    
    const db = getDatabase(app);
    const starCountRef = ref(db, 'StoryConfig');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setC(snapshot.val())
      console.log(snapshot.val());
    });
    
  }, []);
  return <Story storyConfig={c}/> 
}

const Story = ({storyConfig}) =>{
  return (
    <section>
        <div className=" flex flex-col">
          <p>Story Quote: {storyConfig.quote}</p>
          <p>StoryContent: {storyConfig.content}</p>
      </div>
    </section>
  );
}