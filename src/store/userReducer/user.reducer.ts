import type { AnyAction } from "redux";
import {
  setAlphabeticSorting,
  setInputSorting,
  setPriceSorting,
  toggleSortingAscending,
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
  inputSort: string;
  ascending: boolean;
};

export type UserState = {
  readonly currentUser: Record<string, unknown>;
  readonly isLoading: boolean;
  readonly error: Error | null;
  readonly sort: {
    sorType: string;
    inputSort: string;
    ascending: boolean;
  };
};

const USER_INITIAL_STATE: UserState = {
  currentUser: {},
  isLoading: false,
  error: null,
  sort: {
    sorType: "alphabetic",
    inputSort: "",
    ascending: true
  }
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action = {} as AnyAction
): UserState => {
  
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

  if (setInputSorting.match(action)) {
    return {
      ...state,
      sort: {
        ...state.sort,
        inputSort: action.payload
      }
    };
  }

  // if (setUser.match(action)) {
  //   return { ...state, currentUser: action.payload };
  // }

  return state;
};
