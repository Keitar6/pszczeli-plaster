import { combineReducers } from "redux";

import { userReducer } from "./userReducer/user.reducer";
import { generalPropReducer } from "./generalPropReducer/generalProp.reducer";
import { cartReducer } from "./cartReducer/cart.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { orderHistoryReducer } from "./orderHistory/orderHistory.reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

export type ReduxState = ReturnType<typeof rootReducer>;

const cartReducerConfig = {
  key: "cartReducer",
  storage: storage,
  whitelist: ["cartItems"]
};

const rootReducer = combineReducers({
  userReducer,
  generalPropReducer,
  cartReducer: persistReducer(cartReducerConfig, cartReducer),
  categoriesReducer,
  orderHistoryReducer
});
export default rootReducer;
