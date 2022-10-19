import { Order } from "../../store/orderHistory/orderHistory.types";

export const timeSorting = (tablica: Order[]) =>
  tablica.sort(function (a: Order, b: Order) {
    return new Date(b.time).getTime() - new Date(a.time).getTime();
  });
