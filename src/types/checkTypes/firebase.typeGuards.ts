import { CartItem } from "../../store/cartReducer/cart.types";
import { Order } from "../../store/orderHistory/orderHistory.types";

export const WhichCollection = (
  ref: CartItem | Order,
  collName: string
): ref is CartItem => {
  return collName === "cartItems";
};

