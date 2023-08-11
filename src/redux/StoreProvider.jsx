"use client";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persisor, store } from "./store";
export default function StoreProvider({ children }) {
  return <Provider store={store}><PersistGate loading={<div>loading</div>} persistor={persisor}>{children}</PersistGate></Provider>;
}
