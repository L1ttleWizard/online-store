import React from "react";
import { Stories } from "./Stories";
import { child, get, getDatabase, ref } from "firebase/database";
import { app } from "../firebase/config";


export const LifestyleStories = ({config}) => {
  return (
    <section className="lifestyle-stories">
      <section className="lifestyle-stories">
        <div className="container">
          <h2 className="lifestyle--title wow slideInUp">
            behind, lifestyle stories
          </h2>
          <div className="lifestyle-inner">
            <Stories storiesConfig = {config}  />
          </div>
        </div>
      </section>
    </section>
  );
};
