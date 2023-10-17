import "./style.css";
import { Story } from "./Components/Story";
import { AfterHeader } from "./Components/AfterHeader";
import { Magazine } from "./Components/Magazine";
import { Parallax } from "./Components/Parallax";
import { LifestyleStories } from "./(LifestyleStories)/LifestyleStories";
import { Form } from "./Components/Form";
import { FeaturedMugs } from "./(FeaturedMugs)/FeaturedMugs";
import { MoreProducts } from "./(MoreProducts)/MoreProducts";
import { StoryConfigComponent } from "./Components/StoryConfigComp";
import { FeaturedMugsConfigComp } from "./(FeaturedMugs)/FeaturedMugsConfigComp";
import { MoreProductsConfigComp } from "./(MoreProducts)/MoreProductsConfigComp";
import { LifestyleConfigComp } from "./(LifestyleStories)/LifestyleStoriesConfigComp";
export default async function Home() {
  return (
    <div>
      <AfterHeader />
      <StoryConfigComponent />
      <FeaturedMugsConfigComp/>
      <MoreProductsConfigComp />
      <Magazine />  
      <Parallax />
      <LifestyleConfigComp/>
      <Form />
    </div>
  );
}
