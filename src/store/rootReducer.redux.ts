import { combineReducers } from "redux";

import { userReducer } from "./userReducer/user.reducer";
import { generalPropReducer } from "./generalPropReducer/generalProp.reducer";
import { cartReducer } from "./cartReducer/cart.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { orderHistoryReducer } from "./orderHistory/orderHistory.reducer";

export type ReduxState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  userReducer,
  generalPropReducer,
  cartReducer,
  categoriesReducer,
  orderHistoryReducer
});
export default rootReducer;
