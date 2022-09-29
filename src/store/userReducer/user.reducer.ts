import type { AnyAction } from "redux";
import { toggleSortingAscending, toggleUserMenu } from "./user.actions";

export type SortingTypes = {
  [key: string]: string | boolean;
};

export const SORTING_TYPES: SortingTypes = {
  DEFAULT: "default",
  PRICE: "price",
  INPUT_STRING: "inputString",
  ASCENDING: true
};

export type UserState = {
  readonly currentUser: Record<string, unknown>;
  readonly isLoading: boolean;
  readonly error: Error | null;
  readonly isUserMenuOpened: boolean;
  readonly sort: {
    sorType: string;
    ascending: boolean;
  };
};

const USER_INITIAL_STATE: UserState = {
  currentUser: {},
  isLoading: false,
  error: null,
  isUserMenuOpened: false,
  sort: {
    sorType: "default",
    ascending: true
  }
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action = {} as AnyAction
): UserState => {
  if (toggleUserMenu.match(action)) {
    return { ...state, isUserMenuOpened: !state.isUserMenuOpened };
  }

  if (toggleSortingAscending.match(action)) {
    return {
      ...state,
      sort: {
        ...state.sort,
        ascending: !state.sort.ascending
      }
    };
  }

  // if (setUser.match(action)) {
  //   return { ...state, currentUser: action.payload };
  // }

  return state;
};
