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
import { fireStorage, NewOrder, usersCollectionRef } from "../firebase.utils";

export type UpdateUsersCartItemsAndOrderHistory = {
  currentCartItems: CartItem[];
  currentUserOrderHistory: Order[];
};

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInfos: AdditionalInformation
) => {
  const userDocRef = doc(usersCollectionRef, userAuth.uid); //database, collection, unique ID
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { email } = userAuth;
    const { displayName, name, lastName, deliveryData } = additionalInfos;
    const createdAt = new Date();
    console.log(additionalInfos);
    // eslint-disable-next-line no-debugger
    debugger;
    try {
      setDoc(userDocRef, {
        createdAt,
        displayName,
        name,
        lastName,
        email,
        deliveryData
      });
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
  const newDoc = doc(
    fireStorage,
    `orderHistory/${newOrder.time.replaceAll("/", ".")}`
  );
  setDoc(newDoc, newOrder, { merge: true });
};

export const modifyUserDbOrderHistory = (userAuth: User, order: Order) => {
  const userDocRef = doc(usersCollectionRef, userAuth.uid);
  const collToAdd = collection(userDocRef, "orderHistory");
  let objectName = "";
  const batch = writeBatch(fireStorage);

  objectName = order.time.replaceAll("/", ".");
  const docRef = doc(collToAdd, objectName);
  batch.set(docRef, order);

  batch.commit();
};

export const modifyUserDbCartItems = (
  userAuth: User,
  currentCartItems: CartItem[],
  usersDbCartItems: CartItem[]
) => {
  const userDocRef = doc(usersCollectionRef, userAuth.uid);
  const collToAdd = collection(userDocRef, "cartItems");
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

export const updateUsersCartItems = (
  userAuth: User,
  { currentCartItems }: UpdateUsersCartItemsAndOrderHistory,
  { cartItems }: UserDatabaseDataType
) => {
  modifyUserDbCartItems(userAuth, currentCartItems, cartItems);
};

export const updateUsersOrderHistory = (userAuth: User, newOrder: Order) => {
  modifyUserDbOrderHistory(userAuth, newOrder);
};

export const resetUsersCartItems = (
  userAuth: User,
  currentCartItems: CartItem[]
) => {
  modifyUserDbCartItems(userAuth, currentCartItems, []);
};
