import type { AnyAction } from "redux";
import { CategoryItem } from "store/categories/category.types";
import {
  setDelivery,
  setPath,
  setProductCard,
  setViewLimiter,
  toggleProductCard,
  toggleUserMenu
} from "./generalProp.actions";
import { PathType } from "./generalProp.types";

export enum DELIVERY_TYPE {
  None = 0,
  PocztaPolska = 12,
  KurierDHL = 9,
  KurierInpost = 11,
  KurierFedEx = 14
}

export type DeliveryType = {
  type: keyof typeof DELIVERY_TYPE;
  price: number;
};

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
  delivery: DeliveryType;
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
  delivery: {
    price: 0,
    type: "None"
  }
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

  if (setDelivery.match(action))
    return {
      ...state,
      delivery: action.payload
    };

  return state;
};
