import { mockCartItems2 } from "./mockCartItem";
import { mockOrderHistory } from "./mockOrderHistory";

export const currentProductCardMock = {
  id: "fsda",
  name: "dobre",
  price: 12,
  image: "dobry",
  dodatki: false,
  quantity: 1
};

export const preload = {
  generalPropReducer: {
    path: "sklep",
    isUserMenuOpened: false,
    isSortingInView:false,
    productCardModal: {
      isProductCardOpened: false,
      currentProductCard: currentProductCardMock
    },
    viewLimiter: 1
  },
  cartReducer: {
    cartItems: [...mockCartItems2],
    isDropdownActive: false,
    _persist: { version: 1, rehydrated: true }
  },
  orderHistoryReducer: {
    delivery: {
      price: 9,
      type: "KurierDHL" as const
    },
    orderHistory: mockOrderHistory,
    isLoading: false,
    error: null
  }
};
