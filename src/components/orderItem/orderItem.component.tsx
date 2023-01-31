import { H4 } from "../../global.styles";
import { FC, useState } from "react";
import { Order } from "../../store/orderHistory/orderHistory.types";

import {
  OrderItemHeader,
  OrderItemContent,
  OrderItemInfoHeader,
  OrderDescription,
  Id,
  Time,
  Total,
  UserInfo,
  ItemsInfo,
  PayDeliveryInfo,
  AdresInfo,
  Info
} from "./orderItem.styles";
import { selectCurrentUserFormData } from "../../store/userReducer/user.selector";
import { useAppSelector } from "../../hooks/hooks";

import { AnimatePresence } from "framer-motion";
import { OrderItemContainer } from "./orderContainer/orderContainer.component";
import { OrdersHistoryOpenVariants } from "../../utils/framer-motion/variants.utils";

type OrderItemProps = {
  orderItem: Order;
};

export const OrderItem: FC<OrderItemProps> = ({ orderItem }) => {
  const { id, time, price, itemsBought, deliveryData, deliveryPrice } =
    orderItem;
  const { name, lastName, email } = useAppSelector(selectCurrentUserFormData);
  const { city, street, homeAdress, zip, deliveryMethod, payMethod } =
    deliveryData;

  const [info, setInfo] = useState(false);

  return (
    <AnimatePresence>
      <OrderItemContainer ifOpened={info}>
        <OrderItemContent onClick={() => setInfo(!info)}>
          <OrderItemHeader>
            <Id>{id}</Id>
            <Time>{time}</Time>

            <Total>{`${price ? price + "zł" : "Błąd"}`}</Total>
          </OrderItemHeader>
          {info ? (
            <OrderItemInfoHeader>
              <UserInfo>
                <H4>{`Użytkownik`}</H4>
                <Info>{`Name: ${name} ${lastName}`}</Info>
                <Info>{`Email: ${email} `}</Info>
              </UserInfo>

              <ItemsInfo>
                <H4>{`Przedmioty`}</H4>
                {itemsBought.length > 0 &&
                  itemsBought.map((item) => (
                    <Info key={item.id}>
                      {`${item.name} - ${item.quantity}x${item.price}zł`}
                    </Info>
                  ))}
              </ItemsInfo>
              <PayDeliveryInfo>
                <H4> {`Dostawa i płatność`}</H4>
                <Info>{`Dostawa: ${deliveryMethod} - ${
                  deliveryPrice ? deliveryPrice + "zł" : "Darmowa dostawa"
                } `}</Info>
                <Info>{`Płatność: ${payMethod} `}</Info>
              </PayDeliveryInfo>
              <AdresInfo>
                <H4>{`Adres`}</H4>
                <Info>{`Miasto: ${city} `}</Info>
                <Info>{`Ulica: ${street} `}</Info>
                <Info>{`Dom: ${homeAdress} `}</Info>
                <Info>{`Kod pocztowy: ${zip} `}</Info>
              </AdresInfo>
            </OrderItemInfoHeader>
          ) : (
            <OrderDescription>
              Kliknij aby zobaczyć szczegóły zamówienia
            </OrderDescription>
          )}
        </OrderItemContent>
      </OrderItemContainer>
    </AnimatePresence>
  );
};
