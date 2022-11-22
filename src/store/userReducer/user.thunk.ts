import { current } from "@reduxjs/toolkit";
import type { User } from "firebase/auth";
import { Dispatch } from "react";
import type { AnyAction } from "redux";
import {
  signInAnonymous,
  signInByEmailAndPassword,
  signInWithGooglePopUp,
  signOutUser,
  signUpByEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/functions/dbManipulationFunctions.FBFunctions";
import {
  getUserCartItemsAndOrderHistory,
  getUserProfileData
} from "../../utils/firebase/functions/gets.FBFunctions";
import { setCartItems } from "../cartReducer/cart.actions";
import { setOrderHistory } from "../orderHistory/orderHistory.action";
import {
  anonymousSignInStart,
  createUsersDocumentFailed,
  createUsersDocumentStart,
  createUsersDocumentSuccess,
  emailSignInStart,
  getUsersDataFailed,
  getUsersDataStart,
  getUsersDataSuccess,
  googleSignInStart,
  setCurrentUserFormData,
  signInAndSetUser,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutStart,
  signOutSuccess,
  signUpFailed,
  signUpStart,
  signUpSuccess
} from "./user.actions";
import { selectCurrentUserFormData } from "./user.selector";
import { AdditionalInformation, UserData } from "./user.types";

export const signOutAsync: any = //ThunkAction<
  // void,
  // any,
  // unknown,
  // AnyAction>
  () => {
    return (dispatch: Dispatch<AnyAction>) => {
      dispatch(signOutStart());
      try {
        signOutUser();

        dispatch(signOutSuccess());
      } catch (error) {
        dispatch(signOutFailed(error as Error));
        console.log(error);
      }
    };
  };

export const signInAnynomousAsync: any = //ThunkAction<
  // void,
  // any,
  // unknown,
  // AnyAction>
  () => {
    return (dispatch: Dispatch<AnyAction>) => {
      dispatch(anonymousSignInStart());
      try {
        signInAnonymous();

        dispatch(signInSuccess());
      } catch (error) {
        dispatch(signInFailed(error as Error));
        console.log(error);
      }
    };
  };

export const signInAsync: any = //ThunkAction<
  // void,
  // any,
  // unknown,
  // AnyAction>
  (currentUser: User) => {
    return (dispatch: Dispatch<AnyAction>) => {
      try {
        dispatch(signInAndSetUser(currentUser));
        dispatch(signInSuccess());
      } catch (error) {
        dispatch(signInFailed(error as Error));
        console.log(error);
      }
    };
  };

export const getUsersDataAsync: any = //ThunkAction<
  // void,
  // any,
  // unknown,
  // AnyAction>
  (currentUser: User) => {
    return async (dispatch: Dispatch<AnyAction>) => {
      dispatch(getUsersDataStart());
      try {
        const userDB = await getUserCartItemsAndOrderHistory(currentUser);
        const userDoc = await getUserProfileData(currentUser);
        dispatch(setCartItems(userDB.cartItems));
        dispatch(setOrderHistory(userDB.orderHistory));
        userDoc && dispatch(setCurrentUserFormData(userDoc.data()));
        dispatch(getUsersDataSuccess(userDB));
      } catch (error) {
        dispatch(getUsersDataFailed(error as Error));
        console.log(error);
      }
    };
  };

export const createUsersDocumentAsync: any = //ThunkAction<
  // void,
  // any,
  // unknown,
  // AnyAction>
  (userAuth: User, additionalInfos?: AdditionalInformation) => {
    return async (dispatch: Dispatch<AnyAction>) => {
      dispatch(createUsersDocumentStart());
      try {
        await createUserDocumentFromAuth(userAuth, additionalInfos);
        dispatch(createUsersDocumentSuccess());
      } catch (error) {
        dispatch(createUsersDocumentFailed(error as Error));
        console.log(error);
      }
    };
  };

export const signInWithEmailAsync: any = //ThunkAction<
  // void,
  // any,
  // unknown,
  // AnyAction>
  (email: string, password: string) => {
    return (dispatch: Dispatch<AnyAction>) => {
      dispatch(emailSignInStart());
      try {
        signInByEmailAndPassword(email, password);
      } catch (error) {
        dispatch(signInFailed(error as Error));
        console.log(error);
      }
    };
  };

export const signInWithGoogleAsync: any = //ThunkAction<
  // void,
  // any,
  // unknown,
  // AnyAction>
  () => {
    return (dispatch: Dispatch<AnyAction>) => {
      dispatch(googleSignInStart());
      try {
        signInWithGooglePopUp();
      } catch (error) {
        dispatch(signInFailed(error as Error));
        console.log(error);
      }
    };
  };

export const signUpAsync: any = //ThunkAction<
  // void,
  // any,
  // unknown,
  // AnyAction>
  (email: string, password: string) => {
    return async (dispatch: Dispatch<AnyAction>) => {
      dispatch(signUpStart());
      try {
        signUpByEmailAndPassword(email, password);
        dispatch(signUpSuccess());
      } catch (error) {
        console.log(error);
        dispatch(signUpFailed(error as Error));
      }
    };
  };
