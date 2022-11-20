import {
  Action,
  actionCreator,
  ActionWithPayload,
  withMatch
} from "../../utils/store/store.utils";
import {
  LoginStatusType,
  UserDatabaseDataType,
} from "./user.reducer";

import {
  AdditionalInformation,
  UserData,
  USER_ACTION_TYPES
} from "./user.types";

export type ToggleSortingAscending =
  Action<USER_ACTION_TYPES.TOGGLE_SORTING_ASCENDING>;

export type SetPriceSorting = Action<USER_ACTION_TYPES.SET_SORTING_BY_PRICE>;

export type SetAlphabeticSorting =
  Action<USER_ACTION_TYPES.SET_SORTING_APLPHABETIC>;

export type SetLoggStatus = ActionWithPayload<
  USER_ACTION_TYPES.SET_LOGGED_STATUS,
  LoginStatusType
>;

export type SetInputSorting = ActionWithPayload<
  USER_ACTION_TYPES.SET_SORTING_INPUT,
  string
>;

export type SignInAndSetUser = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_AND_SET_USER,
  UserData | null
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

export type GetUsersDataStart = Action<USER_ACTION_TYPES.GET_USERS_DATA_START>;
export type GetUsersDataSuccess = ActionWithPayload<
  USER_ACTION_TYPES.GET_USERS_DATA_SUCCESS,
  UserDatabaseDataType
>;
export type GetUsersDataFailed = ActionWithPayload<
  USER_ACTION_TYPES.GET_USERS_DATA_FAILED,
  Error
>;

export type CreateUsersDocumentStart =
  Action<USER_ACTION_TYPES.USERS_DOCUMENT_CREATION_START>;
export type CreateUsersDocumentSuccess =
  Action<USER_ACTION_TYPES.USERS_DOCUMENT_CREATION_SUCCESS>;
export type CreateUsersDocumentFailed = ActionWithPayload<
  USER_ACTION_TYPES.USERS_DOCUMENT_CREATION_FAILED,
  Error
>;

export type SetPreviousUser = Action<USER_ACTION_TYPES.SET_PREVIOUS_USER>;
export type SetNextUser = ActionWithPayload<
  USER_ACTION_TYPES.SET_NEXT_USER,
  UserData | null
>;

export type SetCurrentUserFormData = ActionWithPayload<
  USER_ACTION_TYPES.SET_CURRENT_USER_FORM_DATA,
  AdditionalInformation
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

export const setLoggStatus = withMatch(
  (newStatus: LoginStatusType): SetLoggStatus =>
    actionCreator(USER_ACTION_TYPES.SET_LOGGED_STATUS, newStatus)
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

export const getUsersDataStart = withMatch(
  (): GetUsersDataStart => actionCreator(USER_ACTION_TYPES.GET_USERS_DATA_START)
);

export const getUsersDataSuccess = withMatch(
  (dbItems: UserDatabaseDataType): GetUsersDataSuccess =>
    actionCreator(USER_ACTION_TYPES.GET_USERS_DATA_SUCCESS, dbItems)
);

export const getUsersDataFailed = withMatch(
  (error: Error): GetUsersDataFailed =>
    actionCreator(USER_ACTION_TYPES.GET_USERS_DATA_FAILED, error)
);

export const setPreviousUser = withMatch(
  (): SetPreviousUser => actionCreator(USER_ACTION_TYPES.SET_PREVIOUS_USER)
);

export const setNextUser = withMatch(
  (user: UserData | null): SetNextUser =>
    actionCreator(USER_ACTION_TYPES.SET_NEXT_USER, user)
);

export const createUsersDocumentStart = withMatch(
  (): CreateUsersDocumentStart =>
    actionCreator(USER_ACTION_TYPES.USERS_DOCUMENT_CREATION_START)
);

export const createUsersDocumentSuccess = withMatch(
  (): CreateUsersDocumentSuccess =>
    actionCreator(USER_ACTION_TYPES.USERS_DOCUMENT_CREATION_SUCCESS)
);

export const createUsersDocumentFailed = withMatch(
  (error: Error): CreateUsersDocumentFailed =>
    actionCreator(USER_ACTION_TYPES.USERS_DOCUMENT_CREATION_FAILED, error)
);
export const setCurrentUserFormData = withMatch(
  (formData: AdditionalInformation): SetCurrentUserFormData =>
    actionCreator(USER_ACTION_TYPES.SET_CURRENT_USER_FORM_DATA, formData)
);
