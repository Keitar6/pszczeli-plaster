import type{ User } from "firebase/auth";
import { type DocumentData, QuerySnapshot } from "firebase/firestore";
import { CartItem } from "../cartReducer/cart.types";
import { Order } from "../orderHistory/orderHistory.types";
import { SortType } from "./user.reducer";

export type UserData = User|{
  createdAt: Date;
  displayName: string;
  email: string;
  isAnonymous: boolean;
};

export type UserFromDBData = {
  cartItems: CartItem[];
  orderHistory: Order[];
  sorType?: SortType;
};

export type AdditionalInformation = {
  displayName?: string;
  photoUrl: string | null;
  cartItems: UserFromDBData["cartItems"];
  orderHistory: UserFromDBData["orderHistory"];
  sorType?: UserFromDBData["sorType"];
};

export enum USER_ACTION_TYPES {
  SIGN_IN_AND_SET_USER = "SIGN_IN_AND_SET_USER",
  TOGGLE_SORTING_ASCENDING = "TOGGLE_SORTING_ASCENDING",
  SET_SORTING_BY_PRICE = "SET_SORTING_BY_PRICE",
  SET_SORTING_APLPHABETIC = "SET_SORTING_APLPHABETIC",
  SET_SORTING_INPUT = "SET_SORTING_INPUT",
  SET_ORDER_HISTORY = "SET_ORDER_HISTORY",
  SET_LOGGED_STATUS = "SET_LOGGED_STATUS",

  SIGN_OUT_START = "SIGN_OUT_START",
  SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILED = "SIGN_OUT_FAILED",

  SIGN_UP_START = "SIGN_UP_START",
  SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
  SIGN_UP_FAILED = "SIGN_UP_FAILED",

  ANYNOMOUS_SIGN_IN_START = "ANYNOMOUS_SIGN_IN_START",
  GOOGLE_SIGN_IN_START = "GOOGLE_SIGN_IN_START",
  EMAIL_SIGN_IN_START = "EMAIL_SIGN_IN_START",
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
  SIGN_IN_FAILED = "SIGN_IN_FAILED"
}
