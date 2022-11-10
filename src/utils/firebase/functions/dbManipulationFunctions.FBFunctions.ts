import type { User } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  writeBatch
} from "firebase/firestore";
import { CartItem } from "../../../store/cartReducer/cart.types";
import { Order } from "../../../store/orderHistory/orderHistory.types";
import { UserDatabaseDataType } from "../../../store/userReducer/user.reducer";
import { AdditionalInformation } from "../../../store/userReducer/user.types";
import { WhichCollection } from "../../../types/checkTypes/firebase.typeGuards";
import { fireStorage, NewOrder, usersCollectionRef } from "../firebase.utils";

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInfos = {} as AdditionalInformation
) => {
  const userDocRef = doc(usersCollectionRef, userAuth.uid); //database, collection, unique ID
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const { cartItems, orderHistory, photoUrl } = additionalInfos;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        photoUrl
      });
      addCollectionToDocuments(userAuth, cartItems, "cartItems");
      addCollectionToDocuments(userAuth, orderHistory, "orderHistory");
    } catch (error) {
      console.log("I just caught some error while creating users!!", error);
    }
  }
  // if user data exists
  else if (userSnapshot.exists()) {
    return;
  }
};

//order History functions
export const addNewOrderToHistory = (newOrder: NewOrder) => {
  console.log("New Order: ", newOrder);
  const newDoc = doc(
    fireStorage,
    `orderHistory/${newOrder.time.replaceAll("/", ".")}`
  );
  console.log("New Doc: ", newDoc);

  setDoc(newDoc, newOrder, { merge: true });
};

export const addCollectionToDocuments = (
  userAuth: User,
  objectsToAdd: CartItem[] | Order[],
  collectionName: "orderHistory" | "cartItems"
) => {
  const userDocRef = doc(usersCollectionRef, userAuth.uid);
  const collToAdd = collection(userDocRef, collectionName);
  const batch = writeBatch(fireStorage);
  let objectName = "";

  objectsToAdd.forEach((object) => {
    WhichCollection(object, "cartItems")
      ? (objectName = object.name)
      : (objectName = object.time.replaceAll("/", "."));

    const docRef = doc(collToAdd, objectName);
    batch.set(docRef, object);
  });

  batch.commit();
  console.log(batch);
};

export const modifyUserDbCartItems = (
  userAuth: User,
  currentCartItems: CartItem[],
  usersDbCartItems: CartItem[],
  collectionName: "orderHistory" | "cartItems"
) => {
  const userDocRef = doc(usersCollectionRef, userAuth.uid);
  const collToAdd = collection(userDocRef, collectionName);
  const batch = writeBatch(fireStorage);
  let objectName = "";

  //check if usersDB data have still the same objects
  usersDbCartItems.forEach((dbCartItem) => {
    if (!currentCartItems.includes(dbCartItem)) {
      objectName = dbCartItem.name;
      const docRef = doc(collToAdd, objectName);
      batch.delete(docRef);
    }
  });

  currentCartItems.forEach((cartItem) => {
    objectName = cartItem.name;
    const docRef = doc(collToAdd, objectName);
    batch.set(docRef, cartItem);
  });

  batch.commit();
};

export const updateUsersCartItems = async (
  userAuth: User,
  localObjects: CartItem[],
  { cartItems, orderHistory }: UserDatabaseDataType
) => {
  modifyUserDbCartItems(userAuth, localObjects, cartItems, "cartItems");
  addCollectionToDocuments(userAuth, localObjects, "orderHistory");
};
