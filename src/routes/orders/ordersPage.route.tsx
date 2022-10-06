import { useAppSelector } from "hooks/hooks";

import {
  OrdersContainer,
  OrdersHeader,
  HeaderBlock,
  OrdersTitle,
  OrdersContent
} from "./ordersPage.styles";

import { selectOrderHistory } from "store/userReducer/user.selector";
import { OrderItem } from "components/orderItem/orderItem.component";

const OrdersPage = () => {
  const ordersHistory = useAppSelector(selectOrderHistory);

  const ordersHeaders = {
    title: "zamówienia",
    id: "#id",
    date: "Data",
    price: "Kwota"
  };

  return (
    <OrdersContainer>
      <OrdersContent>
        <OrdersTitle>{`${ordersHeaders.title.toUpperCase()}`}</OrdersTitle>
        <OrdersHeader>
          <HeaderBlock>{`${ordersHeaders.id}`}</HeaderBlock>

          <HeaderBlock>{`${ordersHeaders.date}`}</HeaderBlock>

          <HeaderBlock>{`${ordersHeaders.price}`}</HeaderBlock>
        </OrdersHeader>
        {ordersHistory
          ? ordersHistory.map((currentOrder) => (
              // <div key={currentOrder.id}>AAAA</div>
              <OrderItem
                key={currentOrder.id}
                orderItem={currentOrder}
              ></OrderItem>
            ))
          : null}
      </OrdersContent>
    </OrdersContainer>
  );
};

export default OrdersPage;
