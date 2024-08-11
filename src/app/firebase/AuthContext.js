"use client";

import { useContext, createContext } from "react";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import React from "react";
import "src/app/style.css";
import { auth } from "../firebase/config";
import { loginUser } from "@/redux/features/userData";
import { useDispatch } from "react-redux";

