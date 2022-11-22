import { CartItem } from "../../store/cartReducer/cart.types";

export type DeliveryData = {
  payMethod: string;
  deliveryMethod: string;
  city: string;
  homeAdress: string;
  street: string;
  zip: string;
  terms: boolean;
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
  SET_ORDER_HISTORY = "SET_ORDER_HISTORY"
}

export type PathType = string;
