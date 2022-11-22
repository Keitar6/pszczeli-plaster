import { USER_INITIAL_STATE } from "../../store/userReducer/user.reducer";
import { mockCartItems } from "./mockCartItem";

export const deliveryData = USER_INITIAL_STATE.currentUserFormData.deliveryData

export const mockOrder = {
  id: "adgadg",
  time: "adgadg",
  price: 123,
  itemsBought: mockCartItems,
  deliveryData: deliveryData,
  deliveryPrice: 15
};
