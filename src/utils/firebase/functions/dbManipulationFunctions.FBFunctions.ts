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
import {
  AdditionalInformation,
  ProfileDetailsType,
  UserInfoFromDB
} from "../../../store/userReducer/user.types";
import { reverseProfileDetailsCreator } from "../../reusableFunctions/profileDetailsCreator.Functions";
import { fireStorage, NewOrder, usersCollectionRef } from "../firebase.utils";
import { getUserProfileRef } from "./gets.FBFunctions";

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
  else if (userSnapshot.exists()) {
    return;
  }
};

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

  console.log(currentCartItems, usersDbCartItems);

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
  console.log(currentCartItems, cartItems)
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

export const updateProfileInformationInDoc = async (
  userAuth: User,
  updatedProfile: ProfileDetailsType,
  initProfile: UserInfoFromDB
) => {
  const userDoc = await getUserProfileRef(userAuth);
  const profileAfterUpdate = reverseProfileDetailsCreator(
    updatedProfile,
    initProfile
  );
  try {
    setDoc(userDoc, profileAfterUpdate);
  } catch (error) {
    console.log("ERROR IN UPDATING PROFILE", error);
  }
};
