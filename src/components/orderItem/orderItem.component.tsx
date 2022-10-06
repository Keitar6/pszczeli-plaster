import { FC } from "react";

import { Order } from "store/userReducer/user.reducer";

import {
  CheckoutItemContainer,
  Id,
  Time,
  Total
} from "./orderItem.styles";

type OrderItemProps = {
  orderItem: Order;
};

//   Order{
//     id: string;
//     time: string;
//     price: number;
//     itemsBought: OrderItem[];
//     deliveryData: DeliveryData;
// }
export const OrderItem: FC<OrderItemProps> = ({ orderItem }) => {
  const { id, time, price, itemsBought, deliveryData } = orderItem;

  // const removeItemHandler = () =>
  //   dispatch(removeItemFromCart(cartItems, orderItem));

  return (
    <CheckoutItemContainer>
      <Id>{id}</Id>
      <Time>{time}</Time>

      <Total>{`${price}$`}</Total>

      {/* <RemoveButton
        className="remove-button"
        onClick={() =>
          dispatch(removeItemFromCart(cartItems, orderItem, "all"))
        }
      >
        &#10005;
      </RemoveButton> */}
    </CheckoutItemContainer>
  );
};
