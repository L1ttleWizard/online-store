import React from "react";
import { StoriesConfig } from "../../../public/Data/configs";
export const Stories = () => {
  return (
    <>
      {StoriesConfig.map((story, idx) => {
        return (
          <div
            className="lifestyle-item wow slideInUp"
            data-wow-offset={3}
            key={idx}
          >
            <a href="#" className="third-block-story lifestyle-image">
              <div className="mask" />
              <span className="lifestyle-button">read the full story</span>
            </a>
            <a href="#" className="lifestyle-subtitle">
              {story.subtitle}
            </a>
            <p className="lifestyle-content">{story.content}</p>
            <span className="date">{story.date}</span>
          </div>
        );
      })}
    </>
  );
};
