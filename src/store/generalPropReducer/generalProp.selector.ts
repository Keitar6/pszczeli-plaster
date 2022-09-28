import { createSelector } from "reselect";
import { ReduxState } from "store/rootReducer.redux";

export const selectGeneralPropReducer = (state: ReduxState) =>
  state.generalPropReducer;

export const selectTheme = createSelector(
  [selectGeneralPropReducer],
  (state) => state.theme
);

export const selectPath = createSelector(
  [selectGeneralPropReducer],
  (state) => state.path
);
