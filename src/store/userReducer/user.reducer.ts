import type { AnyAction } from "redux";
import {
  setAlphabeticSorting,
  setPriceSorting,
  toggleSortingAscending,
  toggleUserMenu
} from "./user.actions";

export type SortingTypes = {
  ALPHABETIC: string;
  PRICE: string;
  INPUT_STRING: string;
  ASCENDING: boolean;
};

export const SORTING_TYPES: SortingTypes = {
  ALPHABETIC: "alphabetic",
  PRICE: "price",
  INPUT_STRING: "inputString",
  ASCENDING: true
};

export type SortType = {
  sorType: string;
  ascending: boolean;
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
    sorType: "alphabetic",
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

  if (setAlphabeticSorting.match(action)) {
    return {
      ...state,
      sort: {
        ...state.sort,
        sorType: SORTING_TYPES.ALPHABETIC
      }
    };
  }

  if (setPriceSorting.match(action)) {
    return {
      ...state,
      sort: {
        ...state.sort,
        sorType: SORTING_TYPES.PRICE
      }
    };
  }

  // if (setUser.match(action)) {
  //   return { ...state, currentUser: action.payload };
  // }

  return state;
};
