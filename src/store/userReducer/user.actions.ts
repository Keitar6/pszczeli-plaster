import {
  Action,
  actionCreator,
  ActionWithPayload,
  withMatch
} from "../../utils/store/store.utils";
import { UserState } from "./user.reducer";

import {  USER_ACTION_TYPES } from "./user.types";

export type ToggleSortingAscending =
  Action<USER_ACTION_TYPES.TOGGLE_SORTING_ASCENDING>;

export type SetPriceSorting = Action<USER_ACTION_TYPES.SET_SORTING_BY_PRICE>;

export type SetAlphabeticSorting =
  Action<USER_ACTION_TYPES.SET_SORTING_APLPHABETIC>;

export type SetInputSorting = ActionWithPayload<
  USER_ACTION_TYPES.SET_SORTING_INPUT,
  string
>;

export type SignInAndSetUser = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_AND_SET_USER,
  UserState["currentUser"]
>;

export type AnonymousSignInStart =
  Action<USER_ACTION_TYPES.ANYNOMOUS_SIGN_IN_START>;
export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export type EmailSignInStart = Action<USER_ACTION_TYPES.EMAIL_SIGN_IN_START>;

export type SignInSuccess = Action<USER_ACTION_TYPES.SIGN_IN_SUCCESS>;
export type SignInFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILED,
  Error
>;

export type SignUpStart = Action<USER_ACTION_TYPES.SIGN_UP_START>;
export type SignUpSuccess = Action<USER_ACTION_TYPES.SIGN_UP_SUCCESS>;
export type SignUpFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILED,
  Error
>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export type SignOutFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAILED,
  Error
>;

export const toggleSortingAscending = withMatch(
  (): ToggleSortingAscending =>
    actionCreator(USER_ACTION_TYPES.TOGGLE_SORTING_ASCENDING)
);

export const setPriceSorting = withMatch(
  (): SetPriceSorting => actionCreator(USER_ACTION_TYPES.SET_SORTING_BY_PRICE)
);

export const setAlphabeticSorting = withMatch(
  (): SetAlphabeticSorting =>
    actionCreator(USER_ACTION_TYPES.SET_SORTING_APLPHABETIC)
);

export const setInputSorting = withMatch(
  (input: string): SetInputSorting =>
    actionCreator(USER_ACTION_TYPES.SET_SORTING_INPUT, input)
);

export const signInAndSetUser = withMatch(
  (user): SignInAndSetUser =>
    actionCreator(USER_ACTION_TYPES.SIGN_IN_AND_SET_USER, user)
);

export const signOutStart = withMatch(
  (): SignOutStart => actionCreator(USER_ACTION_TYPES.SIGN_OUT_START)
);

export const signOutSuccess = withMatch(
  (): SignOutSuccess => actionCreator(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatch(
  (error: Error): SignOutFailed =>
    actionCreator(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
);

export const anonymousSignInStart = withMatch(
  (): AnonymousSignInStart =>
    actionCreator(USER_ACTION_TYPES.ANYNOMOUS_SIGN_IN_START)
);

export const googleSignInStart = withMatch(
  (): GoogleSignInStart => actionCreator(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
);

export const emailSignInStart = withMatch(
  (): EmailSignInStart => actionCreator(USER_ACTION_TYPES.EMAIL_SIGN_IN_START)
);

export const signInSuccess = withMatch(
  (): SignInSuccess => actionCreator(USER_ACTION_TYPES.SIGN_IN_SUCCESS)
);

export const signInFailed = withMatch(
  (error: Error): SignInFailed =>
    actionCreator(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);

export const signUpStart = withMatch(
  (): SignUpStart => actionCreator(USER_ACTION_TYPES.SIGN_UP_START)
);

export const signUpSuccess = withMatch(
  (): SignUpSuccess => actionCreator(USER_ACTION_TYPES.SIGN_UP_SUCCESS)
);

export const signUpFailed = withMatch(
  (error: Error): SignUpFailed =>
    actionCreator(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
);
