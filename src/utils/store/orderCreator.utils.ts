import { DeliveryData, Order, OrderItem } from "store/orderHistory/orderHistory.types";

export const orderCreator= (
  id: string,
  time: string,
  price: number,
  itemsBought: OrderItem[],//{,quantity:15}
  deliveryData: DeliveryData,
  deliveryPrice: number
):Order => {
  return {
    id,
    time,
    price,
    itemsBought,
    deliveryData,
    deliveryPrice
  };
};
