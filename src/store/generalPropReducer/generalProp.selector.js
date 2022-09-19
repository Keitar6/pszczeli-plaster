import { createSelector } from "reselect";

export const selectGeneralPropReducer = (state) => state.generalPropReducer;

export const selectTheme = createSelector([selectGeneralPropReducer],(state)=>state.theme)