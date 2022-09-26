import { AnyAction } from "redux";
import { setUser, toggleUserMenu } from "./user.actions";
import USER_ACTION_TYPES from "./user.types";

export type UserState = {
  readonly currentUser: {};
  readonly isLoading: boolean;
  readonly error: Error | null;
  readonly isUserMenuOpened: boolean;
};

const USER_INITIAL_STATE = {
  currentUser: {},
  isLoading: false,
  error: null,
  isUserMenuOpened: false
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action = {} as AnyAction
) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SET_USER:
      return {
        ...state,
        user: action.payload
      };

    case USER_ACTION_TYPES.TOGGLE_USER_MENU:
      return {
        ...state,
        isUserMenuOpened: !state.isUserMenuOpened
      };

    default:
      return {
        ...state
      };
  }
};

export const categoriesReducer = (
  state = USER_INITIAL_STATE,
  action = {} as AnyAction
): UserState => {
  if (toggleUserMenu.match(action)) {
    return { ...state, isUserMenuOpened: !state.isUserMenuOpened };
  }

  // if (setUser.match(action)) {
  //   return { ...state, currentUser: action.payload };
  // }

  return state;
};
