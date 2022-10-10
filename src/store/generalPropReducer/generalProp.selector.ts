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

export const selectDelivery = createSelector(
  [selectGeneralPropReducer],
  (state) => state.delivery
);

export const selectOrderHistory = createSelector(
  [selectGeneralPropReducer],
  (GeneralPropReducer) => GeneralPropReducer.orderHistory
);
