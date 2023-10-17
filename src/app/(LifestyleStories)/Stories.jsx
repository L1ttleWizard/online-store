"use client"
import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { useState } from "react";
import { useLayoutEffect } from "react";
import { app } from "../firebase/config";
export const Stories = ({storiesConfig}) => {
  
  return (
    <>
      {storiesConfig.map((story, idx) => {
        return (
          <div
            className="lifestyle-item wow slideInUp"
            data-wow-offset={3}
            key={idx}
          >
            <a href="#" className={`third-block-story lifestyle-image bg-cover`}>
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
