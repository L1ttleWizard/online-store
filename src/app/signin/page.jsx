"use client";
import 'src/app/style.css'
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import React, { useState, useEffect } from "react";
import "src/app/style.css";
import { app, auth, firestoreDatabase } from "../firebase/config";

import { UserAuth, handleLogout } from "../firebase/AuthContext";
import { getAuth } from "firebase/auth";
import { loginUser, logoutUser } from "@/redux/features/userData";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { reset, updateStore } from "@/redux/features/cart";
import { Button } from "@mui/material";
import Router from "next/router";
import { doc, getDoc } from "firebase/firestore";

export default function Signin() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [actoken, setActoken] = useState("");
  const handlePopupAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const displayName = result.displayName;
        const email = result.email;
        const photoURL = result.photoURL;
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = result.user.uid;
        console.log(result.user.uid);
        
        console.log("act", result.user);
        const user = result.user;
        dispatch(
          loginUser({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            token,
          })
        );
        setActoken(token);
      })
      .catch((error) => {
        const errorMessage = error.message;

        alert(errorMessage);
      });
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(logoutUser());
        dispatch(reset());
        alert("logged out");
        router.push("/");
      })
      .catch((error) => {
        alert("Error signing out", error);
      });
  };
  useEffect(() => {
    handleCartUpdate(actoken);
  },);
  const handleCartUpdate = async (actoken) => {
    if (actoken) {
      const docRef = doc(firestoreDatabase, "usersData", `${actoken}`);
      const docSnap = await getDoc(docRef);
      console.log("---" + actoken + "---");

      if (docSnap.exists()) {
        console.log("Document data:",docSnap.data());
        dispatch(updateStore(docSnap.data()))
        router.push("/");
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!", actoken);
      }
    }
  };
  return (
    <>
      <div className="flex flex-col items-center gap-y-2 gap-2">
        <h1>sign in</h1>
        <Button
          variant="outlined"
          className="text center  m-3 p-3 pt-2 flex mr-auto ml-auto bg-gray rounded-xl"
          onClick={handlePopupAuth}
        >
          Google Sign IN
        </Button>
        <Button
          variant="outlined"
          className="text-center flex mr-auto ml-auto m-3 p-3 pt-2 bg-gray rounded-xl"
          onClick={handleLogout}
        >
          logout
        </Button>
e
        <div></div>
      </div>
    </>
  );
}
