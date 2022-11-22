import type { User } from "firebase/auth";
import { formData } from "../../utils/checkoutForm/checkoutForm.utils";
import { CartItem } from "../cartReducer/cart.types";
import { DeliveryData, Order } from "../orderHistory/orderHistory.types";
import { SortType } from "./user.reducer";

export type UserData =
  | User
  | {
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
  displayName: string;
  name: string;
  lastName: string;
  email: string;
  deliveryData: DeliveryData;
};

export type UserInfoFromDB = AdditionalInformation;

export type ProfileDetailsType = {
  displayName?: string;
  name: string;
  lastName: string;
  email: string;
  city: string;
  homeAdress: string;
  street: string;
  zip: string;
  terms: boolean;
};

export enum USER_ACTION_TYPES {
  SIGN_IN_AND_SET_USER = "SIGN_IN_AND_SET_USER",
  SET_PREVIOUS_USER = "SET_PREVIOUS_USER",
  SET_NEXT_USER = "SET_NEXT_USER",
  TOGGLE_SORTING_ASCENDING = "TOGGLE_SORTING_ASCENDING",
  SET_SORTING_BY_PRICE = "SET_SORTING_BY_PRICE",
  SET_SORTING_APLPHABETIC = "SET_SORTING_APLPHABETIC",
  SET_SORTING_INPUT = "SET_SORTING_INPUT",
  SET_ORDER_HISTORY = "SET_ORDER_HISTORY",
  SET_LOGGED_STATUS = "SET_LOGGED_STATUS",
  SET_CURRENT_USER_FORM_DATA = "SET_CURRENT_USER_FORM_DATA",
  TOGGLE_PROFILE_EDITING = "TOGGLE_PROFILE_EDITING",

  SIGN_OUT_START = "SIGN_OUT_START",
  SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS",
  SIGN_OUT_FAILED = "SIGN_OUT_FAILED",

  SIGN_UP_START = "SIGN_UP_START",
  SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
  SIGN_UP_FAILED = "SIGN_UP_FAILED",

  GET_USERS_DATA_START = "GET_USERS_DATA_START",
  GET_USERS_DATA_SUCCESS = "GET_USERS_DATA_SUCCESS",
  GET_USERS_DATA_FAILED = "GET_USERS_DATA_FAILED",

  USERS_DOCUMENT_CREATION_START = "USERS_DOCUMENT_CREATION_START",
  USERS_DOCUMENT_CREATION_SUCCESS = "USERS_DOCUMENT_CREATION_SUCCESS",
  USERS_DOCUMENT_CREATION_FAILED = "USERS_DOCUMENT_CREATION_FAILED",

  ANYNOMOUS_SIGN_IN_START = "ANYNOMOUS_SIGN_IN_START",
  GOOGLE_SIGN_IN_START = "GOOGLE_SIGN_IN_START",
  EMAIL_SIGN_IN_START = "EMAIL_SIGN_IN_START",
  SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
  SIGN_IN_FAILED = "SIGN_IN_FAILED"
}
