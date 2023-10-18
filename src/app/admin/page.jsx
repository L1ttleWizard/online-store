import React from "react";
import "src/app/style.css";
import { StoryConfig } from "./StoryConfig";
import { StoryConfigComponent } from "../Components/StoryConfigComp";
import { StoryConfigComponentAdmin } from "./StoryConfigComp";

export default function Home() {
  return (
    <>
      <StoryConfigComponentAdmin />
      <StoryConfig />
    </>
  );
}
