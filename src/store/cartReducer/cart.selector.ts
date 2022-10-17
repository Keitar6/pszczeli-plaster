import { createSelector } from "reselect";
import { ReduxState } from "../../store/rootReducer.redux";

const selectCartReducer = (state: ReduxState) => state.cartReducer;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartMenuOpened = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.isDropdownActive
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);
