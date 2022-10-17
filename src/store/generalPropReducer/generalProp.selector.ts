import { createSelector } from "reselect";
import { ReduxState } from "store/rootReducer.redux";

export const selectGeneralPropReducer = (state: ReduxState) =>
  state.generalPropReducer;

export const selectIsUserMenuOpened = createSelector(
  [selectGeneralPropReducer],
  (generalPropReducer) => generalPropReducer.isUserMenuOpened
);

export const selectProductCardModal = createSelector(
  [selectGeneralPropReducer],
  (generalPropReducer) => generalPropReducer.productCardModal
);

export const selectIsProductCardOpened = createSelector(
  [selectProductCardModal],
  (productCardOpened) => productCardOpened.isProductCardOpened
);

export const selectCurrentProductCard = createSelector(
  [selectProductCardModal],
  (productCardOpened) => productCardOpened.currentProductCard
);

export const selectPath = createSelector(
  [selectGeneralPropReducer],
  (state) => state.path
);

export const selectViewLimiter = createSelector(
  [selectGeneralPropReducer],
  (state) => state.viewLimiter
);
