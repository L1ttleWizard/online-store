"use client";
import "src/app/style.css";
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

import {
  UserAuth,
  handleLogout,
} from "../firebase/AuthContext";
import { getAuth } from "firebase/auth";
import { loginUser, logoutUser } from "@/redux/features/userData";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";




export default function Signin() {
  const router = useRouter();
  const dispatch = useDispatch();
   const handlePopupAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const displayName = result.displayName;
        const email = result.email;
        const photoURL = result.photoURL;
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        dispatch(loginUser({displayName:user.displayName,email:user.email,photoURL:user.photoURL,token:token}))
        router.push('/')
      })
      .catch((error) => {
        const errorMessage = error.message;
  
        console.log(errorMessage);
      });
  };

  const handleLogout = () => {
    signOut(auth)
     .then(() => {
        dispatch(logoutUser());
        alert('logged out');
      })
     .catch((error) => {
        console.log("Error signing out", error);
      });
  }
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user);

  

  return (
    <>
      
      <div className="flex flex-col">
        <h1>sign in</h1>
        <div
          className="text center  m-3 p-3 pt-2 flex mr-auto ml-auto bg-gray rounded-xl"
          onClick={handlePopupAuth}
        >
          Google Sign IN
        </div>
        <div
          className="text-center flex mr-auto ml-auto m-3 p-3 pt-2 bg-gray rounded-xl"
          onClick={handleLogout}
        >
          logout
        </div>

        <div></div>
      </div>
    </>
  );
}
