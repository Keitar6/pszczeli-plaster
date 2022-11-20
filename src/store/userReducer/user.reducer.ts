import type { AnyAction } from "redux";
import { CartItem } from "../cartReducer/cart.types";
import { Order } from "../orderHistory/orderHistory.types";
import {
  anonymousSignInStart,
  emailSignInStart,
  getUsersDataFailed,
  getUsersDataStart,
  getUsersDataSuccess,
  googleSignInStart,
  setAlphabeticSorting,
  setCurrentUserFormData,
  setInputSorting,
  setLoggStatus,
  setNextUser,
  setPreviousUser,
  setPriceSorting,
  signInAndSetUser,
  signInFailed,
  signInSuccess,
  signOutFailed,
  signOutStart,
  signOutSuccess,
  toggleSortingAscending
} from "./user.actions";
import { AdditionalInformation, UserData } from "./user.types";

export type SorTypeVariations = {
  ALPHABETIC: "alphabetic";
  PRICE: "price";
};

export const SortTypeVariations: SorTypeVariations = {
  ALPHABETIC: "alphabetic",
  PRICE: "price"
};

export type SortingTypes = {
  [keys in keyof typeof SortTypeVariations]: typeof SortTypeVariations[keys];
} & { INPUT_STRING: string; ASCENDING: boolean };

export const SORTING_TYPES: SortingTypes = {
  ALPHABETIC: "alphabetic",
  PRICE: "price",
  INPUT_STRING: "inputString",
  ASCENDING: true
};

export type SortType = {
  sorType: SorTypeVariations[keyof SorTypeVariations];
  inputSort: string;
  ascending: boolean;
};

export enum LOGIN_STATUS_TYPES {
  NOT_LOGGED_IN_YET = "notLoggedInYet",
  LOGGED_IN = "loggedIn",
  LOGGED_OUT = "loggedOut"
}
export type LoginStatusType = LOGIN_STATUS_TYPES[keyof LOGIN_STATUS_TYPES];

export type UserDatabaseDataType = {
  cartItems: CartItem[];
  orderHistory: Order[];
};

export type UserState = {
  readonly previousUser: {
    status: UserData | null;
    userDatabaseData: UserDatabaseDataType;
  };
  readonly currentUser: UserData | null;
  readonly currentUserDBData: UserDatabaseDataType;
  readonly currentUserFormData: AdditionalInformation;

  readonly nextUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
  readonly sort: SortType;
  readonly loginStatus: LoginStatusType;
};

export const USER_INITIAL_STATE: UserState = {
  previousUser: {
    status: null,
    userDatabaseData: {
      cartItems: [],
      orderHistory: []
    }
  },
  currentUser: null,
  currentUserDBData: {
    cartItems: [],
    orderHistory: []
  },
  currentUserFormData: {
    displayName: "",
    name: "",
    lastName: "",
  },
  nextUser: null,
  isLoading: false,
  error: null,
  sort: {
    sorType: "alphabetic",
    inputSort: "",
    ascending: true
  },
  loginStatus: "notLoggedInYet"
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

  if (setLoggStatus.match(action)) {
    return {
      ...state,
      loginStatus: action.payload
    };
  }

  if (signOutStart.match(action)) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (signOutFailed.match(action)) {
    return {
      ...state,
      isLoading: false,
      error: action.payload
    };
  }

  if (signOutSuccess.match(action)) {
    return {
      ...state,
      isLoading: false
    };
  }

  if (googleSignInStart.match(action)) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (emailSignInStart.match(action)) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (anonymousSignInStart.match(action)) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (signInFailed.match(action)) {
    return {
      ...state,
      isLoading: false,
      error: action.payload
    };
  }

  if (signInAndSetUser.match(action)) {
    return {
      ...state,
      isLoading: true,
      currentUser: action.payload
    };
  }

  if (signInSuccess.match(action)) {
    return {
      ...state,
      isLoading: false
    };
  }

  if (getUsersDataStart.match(action)) {
    return {
      ...state,
      isLoading: true
    };
  }
  if (getUsersDataSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      currentUserDBData: action.payload
    };
  }

  if (getUsersDataFailed.match(action)) {
    return {
      ...state,
      error: action.payload
    };
  }

  if (setPreviousUser.match(action)) {
    return {
      ...state,
      previousUser: {
        status: state.currentUser,
        userDatabaseData: state.currentUserDBData
      }
    };
  }

  if (setNextUser.match(action)) {
    return {
      ...state,
      nextUser: action.payload
    };
  }

  if (setCurrentUserFormData.match(action)) {
    return {
      ...state,
      currentUserFormData: action.payload
    };
  }

  return state;
};
