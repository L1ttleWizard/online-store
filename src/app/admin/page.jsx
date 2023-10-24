import React from "react";
import "src/app/style.css";
import { StoryConfig } from "./StoryConfig";
import { StoryConfigComponent } from "../Components/StoryConfigComp";
import { StoryConfigComponentAdmin } from "./StoryConfigComp";
import { FeaturedMugsConfigComp } from "../(FeaturedMugs)/FeaturedMugsConfigComp";
import { FeaturedMugsConfigComponentAdmin } from "./FeaturedMugsConfigComponentAdmin";

export default function Home() {
  return (
    <>
      <StoryConfigComponentAdmin />
      <StoryConfig />
      <FeaturedMugsConfigComponentAdmin /> 
    </>
  );
}
