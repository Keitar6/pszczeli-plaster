import { firebaseConfiguration } from "./firebase.config";
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth, signInAnonymously } from "firebase/auth";
import {
  collection,
  connectFirestoreEmulator,
  doc,
  enableMultiTabIndexedDbPersistence,
  getFirestore,
  setDoc
} from "firebase/firestore";
import { Order } from "../../store/orderHistory/orderHistory.types";

export function firebaseInit() {
  const firebaseApp = initializeApp(firebaseConfiguration.firebaseConfig);
  const userAuth = getAuth(firebaseApp);
  const fireStorage = getFirestore(firebaseApp);
  const categoriesCollection = collection(fireStorage, "categories");
  const orderHistoryCollection = collection(fireStorage, "orderHistory");

  if (location.hostname === "localhost") {
    connectAuthEmulator(userAuth, "http://localhost:9090");
    connectFirestoreEmulator(fireStorage, "localhost", 8080);
  }
  enableMultiTabIndexedDbPersistence(fireStorage);
  return {
    categoriesCollection,
    orderHistoryCollection,
    firebaseApp,
    userAuth,
    fireStorage
  };
}
export const {
  categoriesCollection,
  orderHistoryCollection,
  firebaseApp,
  userAuth,
  fireStorage
} = firebaseInit();

export type CollectionName = {
  categories: "categories";
  orderHistory: "orderHistory";
};
export type NewOrder = Order;

//login functions
export const signInAnonymous = async () => {
  const { user } = await signInAnonymously(userAuth);
  console.log(user);
  return user;
};

//admin functions
export const addNewOrderToHistory = (newOrder: NewOrder) => {
  console.log("New Order: ", newOrder);
  const newDoc = doc(
    fireStorage,
    `orderHistory/${newOrder.time.replaceAll("/", ".")}`
  );
  console.log("New Doc: ", newDoc);

  setDoc(newDoc, newOrder, { merge: true });
};
// function to create orderHistory collection and categories
// export const addCollectionAndDocuments = async (
//   collectionKey: string,
//   objectsToAdd: Order[]
// ) => {
//   const collectionRef = collection(fireStorage, collectionKey);
//   const batch = writeBatch(fireStorage);

//   objectsToAdd.forEach((object) => {
//     const docRef = doc(collectionRef, object.time.replaceAll("/", "."));
//     batch.set(docRef, object);
//   });

//   await batch.commit();
//   console.log("done");
// };
