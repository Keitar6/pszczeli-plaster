import type { User } from "firebase/auth";
import { Dispatch } from "react";
import type { AnyAction } from "redux";
import {
  createUserDocumentFromAuth,
  getCurrentUser,
  signInAnonymous,
  signInByEmailAndPassword,
  signInWithGooglePopUp,
  signOutUser,
  signUpByEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import {
  anonymousSignInStart,
  emailSignInStart,
  googleSignInStart,
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
import { AdditionalInformation } from "./user.types";

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
  (email: string, password: string, addInfo: AdditionalInformation) => {
    return async (dispatch: Dispatch<AnyAction>) => {
      dispatch(signUpStart());
      try {
        createUserDocumentFromAuth((await getCurrentUser()) as User, addInfo);
        signUpByEmailAndPassword(email, password);
        dispatch(signUpSuccess());
      } catch (error) {
        console.log(error);
        dispatch(signUpFailed(error as Error));
      }
    };
  };
