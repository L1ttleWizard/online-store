
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg6ScXAAjQQOFJZzvGhJ1-YlUetAzBA5A",
  authDomain: "online-store-a59ef.firebaseapp.com",
  databaseURL: "https://online-store-a59ef-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "online-store-a59ef",
  storageBucket: "online-store-a59ef.appspot.com",
  messagingSenderId: "519718256661",
  appId: "1:519718256661:web:ab050f15f5d5da1a48ce1c",
  measurementId: "G-4VHPWPQ6QL"
};
// Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(app.auth());

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestoreDatabase = getFirestore(app);
export const auth = getAuth(app);