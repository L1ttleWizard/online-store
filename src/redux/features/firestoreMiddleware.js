import { app, firestoreDatabase } from "@/app/firebase/config";
import { doc, setDoc } from "firebase/firestore";

const firestoreMiddleware = (store) => (next) => (action) => {
  // Check if the action matches the expected type
  if (
    action.type === "cart/increment" ||
    action.type === "cart/decrement" ||
    action.type === "cart/resetThis"
  ) {
    const token = store.getState().user.token;
    const dbRef = doc(firestoreDatabase, "usersData", `${token}`);
    
    const setData = async () => {
      const cartInf = store.getState().cart;
      setDoc(dbRef, cartInf)
        .then(() => {
          console.log("Data written to Firestore");
        })
        .catch((error) => {
          console.error("Error writing data to Firestore:", error);
        });
    };
    setData();
  }

  // Pass the action to the next middleware
  return next(action);
};

export default firestoreMiddleware;
