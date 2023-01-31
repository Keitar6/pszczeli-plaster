import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import {
  OrdersContainer,
  OrdersHeader,
  HeaderBlock,
  OrdersTitle,
  OrdersContent,
  OrderItemsContainer,
  OrderListLink,
  OrderItemWrapper
} from "./ordersPage.styles";

import { OrderItem } from "../../components/orderItem/orderItem.component";
import { selectViewLimiter } from "../../store/generalPropReducer/generalProp.selector";
import Button, {
  BUTTON_TYPE_CLASSES
} from "../../components/button/button.component";
import { incrementViewLimiter } from "../../store/generalPropReducer/generalProp.actions";
import { selectOrderHistory } from "../../store/orderHistory/orderHistory.selector";
import { timeSorting } from "../../utils/reusableFunctions/timeSorting.function";
import { selectLoginStatus } from "../../store/userReducer/user.selector";
import { LOGIN_STATUS_TYPES } from "../../store/userReducer/user.reducer";

import { motion } from "framer-motion";
import { OrdersHistoryVariants } from "../../utils/framer-motion/variants.utils";

import { viewLimiterInit } from "../../store/generalPropReducer/generalProp.reducer";

const OrdersPage = () => {
  const dispatch = useAppDispatch();
  const ordersHistory = useAppSelector(selectOrderHistory);
  const viewLimiter = useAppSelector(selectViewLimiter);

  const isLoggedIn = useAppSelector(selectLoginStatus);
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

  return (
    <OrdersContainer>
      <OrdersContent>
        <OrdersTitle>{`${ordersHeaders.title.toUpperCase()}`}</OrdersTitle>
        {tempOrdersHistory.length > 0 ? (
          <>
            <OrdersHeader>
              <HeaderBlock>{`${ordersHeaders.id}`}</HeaderBlock>

              <HeaderBlock>{`${ordersHeaders.date}`}</HeaderBlock>

              <HeaderBlock>{`${ordersHeaders.price}`}</HeaderBlock>
            </OrdersHeader>
            <OrderItemsContainer>
              {tempOrdersHistory
                ? tempOrdersHistory.map((currentOrder, index: number) => {
                    return (
                      <OrderItemWrapper
                        key={currentOrder.id}
                        variants={OrdersHistoryVariants}
                        custom={{ viewLimiterInit, viewLimiter, index }}
                        initial="enter"
                        animate="visible"
                        exit="exit"
                      >
                        <OrderItem orderItem={currentOrder} />
                      </OrderItemWrapper>
                    );
                  })
                : null}
            </OrderItemsContainer>{" "}
          </>
        ) : isLoggedIn === LOGIN_STATUS_TYPES.LOGGED_IN ? (
          "Zrób conajmniej jedno zamówienie żeby widzieć historię zamówień"
        ) : (
          <div>
            <OrderListLink to={"/mojeKonto"}>Zaloguj się </OrderListLink>żeby
            widzieć swoją historię zamówień
          </div>
        )}
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
