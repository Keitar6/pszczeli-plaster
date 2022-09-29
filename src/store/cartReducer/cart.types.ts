import { CategoryItem } from "store/categories/category.types";

export enum CART_ACTION_TYPES {
  SET_TOTAL_COST = "SET_TOTAL_COST",
  SET_ITEMS_QUANTITY = "SET_ITEMS_AMOUNT",
  SET_CART_ITEMS = "SET_CART_ITEMS"
}

export type CartItem = CategoryItem & { quantity: number };
