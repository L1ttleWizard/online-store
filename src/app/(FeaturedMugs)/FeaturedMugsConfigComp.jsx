import React from "react";
import { FeaturedMugs } from "./FeaturedMugs";
import { child, get, getDatabase, ref } from "firebase/database";
import { app } from "../firebase/config";

export async function FeaturedMugsConfigComp() {
  const dbRef = ref(getDatabase(app));
  const snapshot = await get(child(dbRef, "FeaturedMugsConfig"));

  if (snapshot.exists()) {
    const data = snapshot.val();
    return <FeaturedMugs config={data} />;
  } else {
    return <div>No data available</div>;
  }
}
