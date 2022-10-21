import type { AnyAction } from "redux";
import { CategoryItem } from "../../store/categories/category.types";
import {
  setPath,
  setProductCard,
  setViewLimiter,
  toggleProductCard,
  toggleSortingInView,
  toggleUserMenu
} from "./generalProp.actions";
import { PathType } from "./generalProp.types";
export type ProductCardModal = {
  isProductCardOpened: boolean;
  currentProductCard: CategoryItem;
};
export type GeneralPropsState = {
  readonly path: PathType;
  readonly isUserMenuOpened: boolean;
  readonly isSortingInView: boolean;
  readonly productCardModal: ProductCardModal;
  readonly viewLimiter: number;
};

export const GENERAL_PROPS_INITIAL_STATE: GeneralPropsState = {
  path: "sklep",
  isUserMenuOpened: false,
  isSortingInView: false,
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

  if (toggleSortingInView.match(action)) {
    return {
      ...state,
      isSortingInView: !state.isSortingInView
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
