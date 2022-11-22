import { type User } from "firebase/auth";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { CartItem } from "../../../store/cartReducer/cart.types";
import { Order } from "../../../store/orderHistory/orderHistory.types";
import { usersCollectionRef } from "../firebase.utils";
import { docsMapper } from "./helperFunctions.FBFunction";

export const getUserCartItemsAndOrderHistory = async (userAuth: User) => {
  const userDocRef = doc(usersCollectionRef, userAuth.uid);
  const cartItems: CartItem[] = docsMapper(
    await getDocs(collection(userDocRef, "cartItems"))
  );
  const orderHistory: Order[] = docsMapper(
    await getDocs(collection(userDocRef, "orderHistory"))
  );

  return {
    cartItems,
    orderHistory
  };
};

export const getUserProfileRef = async (userAuth: User) => {
  const userDocRef = doc(usersCollectionRef, userAuth.uid);
  return userDocRef;
};
export const getUserProfileDoc = async (userAuth: User) => {
  const userDocRef = doc(usersCollectionRef, userAuth.uid);
  const userDoc = await getDoc(userDocRef);
  return userDoc;
};
export const getUserProfileData = async (userAuth: User) => {
  return (await getUserProfileDoc(userAuth)).data();
};
