import { CategoryItem } from "store/categories/category.types";
import {
  Action,
  actionCreator,
  ActionWithPayload,
  withMatch
} from "utils/store/store.utils";
import { GENERAL_PROPS_ACTION_TYPES, PathType } from "./generalProp.types";

export type SetPathType = ActionWithPayload<
  GENERAL_PROPS_ACTION_TYPES.SET_PATH,
  PathType
>;

export type ToggleUserMenu =
  Action<GENERAL_PROPS_ACTION_TYPES.TOGGLE_USER_MENU>;

export type ToggleProductCard =
  Action<GENERAL_PROPS_ACTION_TYPES.TOGGLE_PRODUCT_CARD_MENU>;

export type SetProductCard = ActionWithPayload<
  GENERAL_PROPS_ACTION_TYPES.SET_CURRENT_PRODUCT_CARD,
  {
    isProductCardOpened: boolean;
    currentProductCard: CategoryItem;
  }
>;

export type SetViewLimiter = ActionWithPayload<
  GENERAL_PROPS_ACTION_TYPES.SET_VIEW_LIMITER,
  number
>;


export const toggleUserMenu = withMatch(
  (): ToggleUserMenu =>
    actionCreator(GENERAL_PROPS_ACTION_TYPES.TOGGLE_USER_MENU)
);

export const toggleProductCard = withMatch(
  (): ToggleProductCard =>
    actionCreator(GENERAL_PROPS_ACTION_TYPES.TOGGLE_PRODUCT_CARD_MENU)
);

export const setProductCard = withMatch(
  (productCard: CategoryItem): SetProductCard =>
    actionCreator(GENERAL_PROPS_ACTION_TYPES.SET_CURRENT_PRODUCT_CARD, {
      isProductCardOpened: true,
      currentProductCard: productCard
    })
);

export const showProductCardDetails = withMatch(
  (allItemsMap: CategoryItem[], productCardName: string): SetProductCard => {
    const temp = allItemsMap.find(
      (product) => product.name === productCardName
    );
    return setProductCard(temp as CategoryItem);
  }
);

export const setPath = withMatch(
  (path: PathType): SetPathType =>
    actionCreator(GENERAL_PROPS_ACTION_TYPES.SET_PATH, path)
);

export const setViewLimiter = withMatch(
  (step: number): SetViewLimiter =>
    actionCreator(GENERAL_PROPS_ACTION_TYPES.SET_VIEW_LIMITER, step)
);

export const incrementViewLimiter = withMatch(
  (currentViewLimiter: number, step = 10): SetViewLimiter =>
    setViewLimiter(step + currentViewLimiter)
);

export const resetViewLimiter = withMatch(
  (): SetViewLimiter => setViewLimiter(2)
);

