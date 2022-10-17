import {
  Action,
  actionCreator,
  ActionWithPayload,
  withMatch
} from "../../utils/store/store.utils";
import { CategoryItem } from "../categories/category.types";
import { CartItem, CART_ACTION_TYPES } from "./cart.types";

export const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const ifProductExist = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (ifProductExist)
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (
  cartItems: CartItem[] = [],
  productToRemove: CartItem,
  ifAll: string
): CartItem[] => {
  const tempCartItems = [...cartItems];
  let updatedCartItemsRemove = [];
  let productId = 0;

  if (ifAll !== "all" && productToRemove && productToRemove.quantity !== 1)
    updatedCartItemsRemove = tempCartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  else if (ifAll === "all") {
    productId = tempCartItems.indexOf(productToRemove);
    tempCartItems.splice(productId, 1);
    updatedCartItemsRemove = [...tempCartItems];
  } else updatedCartItemsRemove = [...cartItems];

  return updatedCartItemsRemove;
};

export type ToggleCartMenu =
  Action<CART_ACTION_TYPES.TOGGLE_CART_MENU>;

export const toggleCartMenu = withMatch(
  (): ToggleCartMenu =>
    actionCreator(CART_ACTION_TYPES.TOGGLE_CART_MENU)
);

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setCartItems = withMatch(
  (categoriesArray: CartItem[]): SetCartItems =>
    actionCreator(CART_ACTION_TYPES.SET_CART_ITEMS, categoriesArray)
);

export const addItemToCart = withMatch(
  (cartItems: CartItem[] = [], productToAdd: CategoryItem) => {
    const updatedCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(updatedCartItems);
  }
);

export const removeItemFromCart = withMatch(
  (cartItems: CartItem[], productToRemove: CartItem, ifAll = "") => {
    const updatedCartItems = removeCartItem(cartItems, productToRemove, ifAll);

    return setCartItems(updatedCartItems);
  }
);
