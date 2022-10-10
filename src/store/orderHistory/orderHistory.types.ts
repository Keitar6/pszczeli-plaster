import { CartItem } from "store/cartReducer/cart.types";

export type DeliveryData = {
  [key: string]: string | boolean;
};

export type OrderItem = CartItem;

export type Order = {
  id: string;
  time: string;
  price: number;
  itemsBought: OrderItem[];
  deliveryData: DeliveryData;
  deliveryPrice: number;
};

export enum DELIVERY_TYPE {
  None = 0,
  PocztaPolska = 12,
  KurierDHL = 9,
  KurierInpost = 11,
  KurierFedEx = 14
}

export type DeliveryType = {
  type: keyof typeof DELIVERY_TYPE;
  price: number;
};
export enum ORDER_HISTORY_ACTION_TYPES {
  SET_DELIVERY = "SET_DELIVERY",

  FETCH_ORDER_HISTORY_START = "FETCH_ORDER_HISTORY_START",
  FETCH_ORDER_HISTORY_SUCCESS = "FETCH_ORDER_HISTORY_SUCCESS",
  FETCH_ORDER_HISTORY_FAILED = "FETCH_ORDER_HISTORY_FAILED",

  POST_ORDER_HISTORY_START = "POST_ORDER_HISTORY_START",
  POST_ORDER_HISTORY_SUCCESS = "POST_ORDER_HISTORY_SUCCESS",
  POST_ORDER_HISTORY_FAILED = "POST_ORDER_HISTORY_FAILED"
}

export type PathType = string;
