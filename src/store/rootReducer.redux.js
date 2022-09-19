import { combineReducers } from "redux";

import { userReducer } from "./userReducer/user.reducer";
import { generalPropReducer } from "./generalPropReducer/generalProp.reducer";
import { cartReducer } from "./cartReducer/cart.reducer";

const rootReducer = combineReducers({
  userReducer,
  generalPropReducer,
  cartReducer,
});
export default rootReducer;
