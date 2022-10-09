import { createSelector } from "reselect";
import { ReduxState } from "store/rootReducer.redux";

export const selectGeneralPropReducer = (state: ReduxState) =>
  state.generalPropReducer;

export const selectIsUserMenuOpened = createSelector(
  [selectGeneralPropReducer],
  (generalPropReducer) => generalPropReducer.isUserMenuOpened
);

export const selectProductCardOpened = createSelector(
  [selectGeneralPropReducer],
  (generalPropReducer) => generalPropReducer.productCardModal
);

export const selectIsProductCardOpened = createSelector(
  [selectProductCardOpened],
  (productCardOpened) => productCardOpened.isProductCardOpened
);

export const selectCurrentProductCard = createSelector(
  [selectProductCardOpened],
  (productCardOpened) => productCardOpened.currentProductCard
);

export const selectTheme = createSelector(
  [selectGeneralPropReducer],
  (state) => state.theme
);

export const selectPath = createSelector(
  [selectGeneralPropReducer],
  (state) => state.path
);

export const selectViewLimiter = createSelector(
  [selectGeneralPropReducer],
  (state) => state.viewLimiter
);
