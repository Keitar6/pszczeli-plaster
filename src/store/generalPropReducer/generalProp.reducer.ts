import type { AnyAction } from "redux";
import { CategoryItem } from "store/categories/category.types";
import {
  setPath,
  setViewLimiter,
  toggleProductCard,
  toggleUserMenu
} from "./generalProp.actions";
import { PathType } from "./generalProp.types";

export type GeneralPropsState = {
  theme: {
    type: string;
    color: string;
  };
  path: PathType;
  isUserMenuOpened: boolean;
  productCardModal: {
    isProductCardOpened: boolean;
    currentProductCard: CategoryItem;
  };
  viewLimiter: number;
};

const GENERAL_PROPS_INITIAL_STATE: GeneralPropsState = {
  theme: {
    type: "default",
    color: "#f06d06"
  },
  path: "sklep",
  isUserMenuOpened: false,
  productCardModal: {
    isProductCardOpened: false,
    currentProductCard: {
      id: "",
      name: "",
      price: 0,
      image: "",
      dodatki: false
    }
  },
  viewLimiter: 2
};

export const generalPropReducer = (
  state = GENERAL_PROPS_INITIAL_STATE,
  action = {} as AnyAction
): GeneralPropsState => {
  if (toggleUserMenu.match(action)) {
    return { ...state, isUserMenuOpened: !state.isUserMenuOpened };
  }

  if (toggleProductCard.match(action)) {
    return {
      ...state,
      productCardModal: {
        ...state.productCardModal,
        isProductCardOpened: !state.productCardModal.isProductCardOpened
      }
    };
  }

  if (setPath.match(action))
    return {
      ...state,
      path: action.payload
    };

  if (setViewLimiter.match(action))
    return {
      ...state,
      viewLimiter: action.payload
    };

  return state;
};
