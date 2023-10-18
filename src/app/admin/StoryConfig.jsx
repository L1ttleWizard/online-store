"use client";
import React from "react";
import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase/config";
import "src/app/style.css";

function writeStoryConfig(content, quote, storyLink) {
  const db = getDatabase(app);
  set(ref(db, "StoryConfig"), {
    content: String(content),
    quote: String(quote),
    storyLink: String(storyLink),
  });
  console.log(content, quote, storyLink);
}
export const StoryConfig = () => {
  const [content, setContent] = useState("");
  const [quote, setQuote] = useState("");
  const [storyLink, setStoryLink] = useState("");
  return (
    <>
      <div>Story Config</div>
      <form className="flex flex-col gap-y-3    ">
        <input
        className="w-fit border rounded-xl p-2"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          placeholder="Quote"
          type="text"
          name="Quote"
          required
        />
        <input
        className="w-fit border rounded-xl p-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          type="text"
          name="Content"
          required
        />
        <a
          className=" border rounded-xl p-2 w-fit cursor-pointer"
          onClick={() => {
            writeStoryConfig(content, quote);
            alert(` Story Config changed:${content} ${quote} ${storyLink}`);
          }}
        >
          Submit
        </a>
      </form>
    </>
  );
};
