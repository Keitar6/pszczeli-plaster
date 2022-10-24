import { firebaseConfiguration } from "./firebase.config";
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  setDoc
} from "firebase/firestore";

import { Order } from "../../store/orderHistory/orderHistory.types";
import { Category } from "../../store/categories/category.types";

const firebaseApp = initializeApp(firebaseConfiguration.firebaseConfig);
const userAuth = getAuth(firebaseApp);
const fireStorage = getFirestore(firebaseApp);

// this is how you get on the spot in the db
const categoriesCollection = collection(fireStorage, "categories");
const orderHistoryCollection = collection(fireStorage, "orderHistory");
const categoriesDoc = doc(categoriesCollection, "");
const orderHistoryDoc = doc(orderHistoryCollection, "");

// this is how you get on the spot in the db in the real time
// snapshots
export type CollectionName = {
  categories: "categories";
  orderHistory: "orderHistory";
};

export const categoriesSnaphot = onSnapshot(
  categoriesCollection,
  (snapshot) => {
    console.log(snapshot);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }
);

export type DocToAdd = Order | Category;
export const addToCollection = (
  collectionName: keyof CollectionName,
  docToAdd: DocToAdd
) => {
  const fullCollectionName = `${collectionName}` + "Collection";

  const collectionFunction =
    fullCollectionName === "categories"
      ? categoriesCollection
      : orderHistoryCollection;
  // reference, smthing like recipe  - where is it?
  const newDocument = doc(collectionFunction);
  // mutation function = let me update the server
  setDoc(newDocument, docToAdd);
};

export const signInAnonymous = async () => {
  const results = await signInAnonymously(userAuth);
  console.log(results.user);

  return results.user;
};
