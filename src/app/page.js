import "./style.css";
import { AfterHeader } from "./Components/AfterHeader";
import { Magazine } from "./Components/Magazine";
import { Parallax } from "./Components/Parallax";
import { Form } from "./Components/Form";

import { FeaturedMugsConfigComp } from "./(FeaturedMugs)/FeaturedMugsConfigComp";
import { MoreProductsConfigComp } from "./(MoreProducts)/MoreProductsConfigComp";
import { LifestyleConfigComp } from "./(LifestyleStories)/LifestyleStoriesConfigComp";
import Link from "next/link";
import { StoryConfigComponent } from "./Components/StoryConfigComp";
export default async function Home() {
  return (
    <div>
      <AfterHeader />
      <StoryConfigComponent />
      <FeaturedMugsConfigComp/>
      <MoreProductsConfigComp />
      <Magazine />
      <Parallax />
      {/* <LifestyleConfigComp/> */}
      <Form />
    </div>
  );
}
  