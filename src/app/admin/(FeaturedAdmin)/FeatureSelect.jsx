"use client";
import { Select } from "@/app/Components/Select";
import React from "react";
import { useState } from "react";
export const FeatureSelect = ({ options }) => {
  const [current, setCurrent] = useState(null);
  console.log(current);
  return (
    <>
      <h2 className="mt-3">FeaturedMugsConfig</h2>
      <select className="border rounded p-2 w-full " onChange={(e)=>{setCurrent(e.target.value)}}>
        <SelectItems options={options} />
      </select>

      <div>current:{current}</div>
    </>
  );
};

const SelectItems = ({ options }) => {
  return options.map((option, idx) => {
    return (
      <option className="p-2 border m-2" key={idx} value={option.value}>
        {option.value}
      </option>
    );
  });
};
