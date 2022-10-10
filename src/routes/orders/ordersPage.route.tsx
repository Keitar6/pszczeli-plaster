import { useAppDispatch, useAppSelector } from "hooks/hooks";

import {
  OrdersContainer,
  OrdersHeader,
  HeaderBlock,
  OrdersTitle,
  OrdersContent
} from "./ordersPage.styles";

import { OrderItem } from "components/orderItem/orderItem.component";
import {
  selectViewLimiter
} from "store/generalPropReducer/generalProp.selector";
import Button, {
  BUTTON_TYPE_CLASSES
} from "components/button/button.component";
import {
  incrementViewLimiter,
  resetViewLimiter
} from "store/generalPropReducer/generalProp.actions";
import { useEffect } from "react";
import { selectOrderHistory } from "store/orderHistory/orderHistory.selector";
import { fetchOrderHistoryAsync } from "store/orderHistory/orderHistory.action";

const OrdersPage = () => {
  const dispatch = useAppDispatch();
  const ordersHistory = useAppSelector(selectOrderHistory);
  const viewLimiter = useAppSelector(selectViewLimiter);
  const tempOrdersHistory = [...ordersHistory].splice(0, viewLimiter);

  const ordersHeaders = {
    title: "zamówienia",
    id: "#id",
    date: "Data",
    price: "Kwota"
  };

  const moreHistoryHandler = () => {
    dispatch(incrementViewLimiter(viewLimiter, 1));
  };

  useEffect(() => {
    dispatch(fetchOrderHistoryAsync());
    return () => {
      dispatch(resetViewLimiter());
    };
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
      </OrdersContent>
      {ordersHistory.length > viewLimiter && (
        <Button
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
