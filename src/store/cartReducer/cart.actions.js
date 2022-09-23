import actionCreator from "../../utils/store/store.utils";
import CART_ACTION_TYPES from "./cart.types";

/*
SET_TOTAL_COST: "SET_TOTAL_COST",
  SET_ITEMS_AMOUNT: "SET_ITEMS_AMOUNT",
  SET_PRODUCT_TO_CART: "SET_PRODUCT_TO_CART" --> ADD / REMOVE / DELETE ITEMS
*/

function addCartItem(CartItems, productToAdd) {
  let TEMPupdatedCartItems = CartItems;
  /*
Whole Functionality
    */
  return TEMPupdatedCartItems;
}

function substractCartItem(CartItems, productToSubstract) {
  let TEMPupdatedCartItems = CartItems;
  /*
Whole Functionality
    */
  return TEMPupdatedCartItems;
}

function removeCartItem(CartItems, productToRemove) {
  let TEMPupdatedCartItems = CartItems;
  /*
Whole Functionality
    */
  return TEMPupdatedCartItems;
}

export const addItemsToCart = (CartItems, productToAdd) => {
  const updatedCartItems = addCartItem(CartItems, productToAdd);
  return actionCreator(CART_ACTION_TYPES.SET_PRODUCT_TO_CART, updatedCartItems);
};

export const substractItemsToCart = (CartItems, productToSubstract) => {
  const updatedCartItems = substractCartItem(CartItems, productToSubstract);
  return actionCreator(CART_ACTION_TYPES.SET_PRODUCT_TO_CART, updatedCartItems);
};

export const removeItemsToCart = (CartItems, productToRemove) => {
  const updatedCartItems = removeCartItem(CartItems, productToRemove);
  return actionCreator(CART_ACTION_TYPES.SET_PRODUCT_TO_CART, updatedCartItems);
};
