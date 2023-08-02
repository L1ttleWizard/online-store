"use client";
import React from "react";
import { Provider } from "react-redux";
export const StoreProvider = ({ children }) => {
  return <Provider>{children}</Provider>;
};
