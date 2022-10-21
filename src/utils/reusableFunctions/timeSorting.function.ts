import { Order } from "../../store/orderHistory/orderHistory.types";

export const timeSorting = (array: Order[]) => {
  const reversedArray = [...array].reverse()
  return reversedArray;
};
