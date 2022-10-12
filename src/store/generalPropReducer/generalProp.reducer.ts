import type { AnyAction } from "redux";
import { CategoryItem } from "store/categories/category.types";
import {
  setPath,
  setProductCard,
  setViewLimiter,
  toggleProductCard,
  toggleUserMenu
} from "./generalProp.actions";
import { PathType } from "./generalProp.types";

export type GeneralPropsState = {
  readonly theme: {
    type: string;
    color: string;
  };
  readonly path: PathType;
  readonly isUserMenuOpened: boolean;
  readonly productCardModal: {
    isProductCardOpened: boolean;
    currentProductCard: CategoryItem;
  };
  readonly viewLimiter: number;

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
  viewLimiter: 2,
  
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

  if (setProductCard.match(action)) {
    return {
      ...state,
      productCardModal: action.payload
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
