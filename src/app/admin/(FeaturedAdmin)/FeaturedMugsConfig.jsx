
import {React } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { app } from "../../firebase/config";
import "src/app/style.css";
import { database } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { query, where, onSnapshot } from "firebase/firestore";
import { Select } from "@/app/Components/Select";
import { FeatureSelect } from "./FeatureSelect";
// const querySnapshot = await getDocs(collection(database, "FeaturedMugsConfig"));
// console.log(
//   querySnapshot.docs.map((doc) =>
//     console.log(Object.assign(doc.data(), { id: doc.id }))
//   )
// );

async function writeStoryConfig(content, quote, storyLink) {}
export const FeaturedMugsConfig = async () => {
  const querySnapshot = await getDocs(
    collection(database, "FeaturedMugsConfig")
  );
 
  const data = querySnapshot.docs.map((doc) => doc.data().name);
  const options = data.map((doc)=>{console.log(); return {value:doc,label:doc}});
  let selectedData = null;
  console.log(selectedData);
  return (
    <FeatureSelect options={options}/>
  );
};
