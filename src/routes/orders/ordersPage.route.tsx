import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import {
  OrdersContainer,
  OrdersHeader,
  HeaderBlock,
  OrdersTitle,
  OrdersContent,
  OrderItemsContainer
} from "./ordersPage.styles";

import { OrderItem } from "../../components/orderItem/orderItem.component";
import { selectViewLimiter } from "../../store/generalPropReducer/generalProp.selector";
import Button, {
  BUTTON_TYPE_CLASSES
} from "../../components/button/button.component";
import { incrementViewLimiter } from "../../store/generalPropReducer/generalProp.actions";
import { useEffect } from "react";
import { selectOrderHistory } from "../../store/orderHistory/orderHistory.selector";
import { fetchOrderHistoryAsync } from "../../store/orderHistory/orderHistory.action";
import { timeSorting } from "../../utils/reusableFunctions/timeSorting.function";
import { orderHistoryCollection } from "../../utils/firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";
import type { Order } from "../../store/orderHistory/orderHistory.types";

const OrdersPage = () => {
  const dispatch = useAppDispatch();
  const ordersHistory = useAppSelector(selectOrderHistory);
  const viewLimiter = useAppSelector(selectViewLimiter);

  const tempOrdersHistory = ordersHistory
    ? [...timeSorting(ordersHistory)].splice(0, viewLimiter)
    : [];

  const ordersHeaders = {
    title: "historia zamówień",
    id: "#id",
    date: "Data",
    price: "Kwota"
  };

  const moreHistoryHandler = () => {
    dispatch(incrementViewLimiter(viewLimiter, 1));
  };

  useEffect(() => {
    onSnapshot(orderHistoryCollection, (snapshot) => {
      const tempCategArray = snapshot.docs.map((d) => d.data());

      dispatch(fetchOrderHistoryAsync(tempCategArray as Order[]));
    });
  }, []);

  return (
    <OrdersContainer>
      <OrdersContent>
        <OrdersTitle>{`${ordersHeaders.title.toUpperCase()}`}</OrdersTitle>
        <OrdersHeader>
          <HeaderBlock>{`${ordersHeaders.id}`}</HeaderBlock>

          <HeaderBlock>{`${ordersHeaders.date}`}</HeaderBlock>

          <HeaderBlock>{`${ordersHeaders.price}`}</HeaderBlock>
        </OrdersHeader>
        <OrderItemsContainer>
          {tempOrdersHistory
            ? tempOrdersHistory.map((currentOrder) => {
                return (
                  <OrderItem
                    key={currentOrder.id}
                    orderItem={currentOrder}
                  ></OrderItem>
                );
              })
            : null}
        </OrderItemsContainer>
      </OrdersContent>
      {ordersHistory.length > viewLimiter && (
        <Button
          data-testid="paginationButton"
          onClick={moreHistoryHandler}
          buttonType={BUTTON_TYPE_CLASSES.base}
        >
          Więcej zamówień...
        </Button>
      )}
    </OrdersContainer>
  );
};

export default OrdersPage;
