import { AnyAction } from "redux";
import { toggleUserMenu } from "./user.actions";

export type UserState = {
  readonly currentUser: Record<string, unknown>;
  readonly isLoading: boolean;
  readonly error: Error | null;
  readonly isUserMenuOpened: boolean;
};

const USER_INITIAL_STATE: UserState = {
  currentUser: {},
  isLoading: false,
  error: null,
  isUserMenuOpened: false
};

export const userReducer = (
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
