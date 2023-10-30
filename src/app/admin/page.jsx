import React from "react";
import "src/app/style.css";
import { StoryConfig } from "./(StoryAdmin)/StoryConfig";
import { StoryConfigComponent } from "../Components/StoryConfigComp";
import { StoryConfigComponentAdmin } from "./(StoryAdmin)/StoryConfigComp";
import { FeaturedMugsConfigComp } from "../(FeaturedMugs)/FeaturedMugsConfigComp";
import { FeaturedMugsConfigComponentAdmin } from "./(FeaturedAdmin)/FeaturedMugsConfigComponentAdmin";
import { FeaturedMugsConfig } from "./(FeaturedAdmin)/FeaturedMugsConfig";

export default function Home() {
  return (
    <>
      <StoryConfigComponentAdmin />
      <StoryConfig />
      <FeaturedMugsConfigComponentAdmin /> 
      <FeaturedMugsConfig/>
    </>
  );
}
