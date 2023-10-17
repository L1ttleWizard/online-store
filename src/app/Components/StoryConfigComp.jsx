import React from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import app from '../firebase/config'
import { Story } from "./Story";

export async function StoryConfigComponent() {
    const dbRef = ref(getDatabase(app));
    const snapshot = await get(child(dbRef, 'StoryConfig'));
    
    if (snapshot.exists()) {
      const data = snapshot.val();
      return <Story storyConfig={data}/>;
    } else {
      return <div>No data available</div>;
    }
  }
