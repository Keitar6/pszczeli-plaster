import { CART_INITIAL_STATE } from "../../store/cartReducer/cart.reducer";
import { CATEGORIES_INITIAL_STATE } from "../../store/categories/category.reducer";
import { GENERAL_PROPS_INITIAL_STATE } from "../../store/generalPropReducer/generalProp.reducer";
import { ORDER_HISTORY_INITIAL_STATE } from "../../store/orderHistory/orderHistory.reducer";
import { USER_INITIAL_STATE } from "../../store/userReducer/user.reducer";

export const mockStore = {
  userReducer: USER_INITIAL_STATE,
  generalPropReducer: GENERAL_PROPS_INITIAL_STATE,
  cartReducer: CART_INITIAL_STATE,
  categoriesReducer: CATEGORIES_INITIAL_STATE,
  orderHistoryReducer: ORDER_HISTORY_INITIAL_STATE
};
