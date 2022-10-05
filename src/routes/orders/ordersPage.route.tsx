import { useAppSelector } from "hooks/hooks";

import {
  OrdersContainer,
  OrdersHeader,
  HeaderBlock,
  OrdersTitle,
  OrdersContent
} from "./ordersPage.styles";
import { selectCartItems } from "store/cartReducer/cart.selector";
import CheckoutItem from "components/checkoutItem/checkoutItem.component";

const OrdersPage = () => {
  const cartItems = useAppSelector(selectCartItems);

  const ordersHeaders = {
    title: "zamówienia",
    id: "produkt",
    description: "Opis",
    quantity: "Ilość",
    price: "Kwota"
  };

  return (
    <OrdersContainer>
      <OrdersContent>
        <OrdersTitle>{`${ordersHeaders.title.toUpperCase()}`}</OrdersTitle>
        <OrdersHeader>
          <HeaderBlock>{`${ordersHeaders.id}`}</HeaderBlock>

          <HeaderBlock>{`${ordersHeaders.description}`}</HeaderBlock>

          <HeaderBlock>{`${ordersHeaders.quantity}`}</HeaderBlock>

          <HeaderBlock>{`${ordersHeaders.price}`}</HeaderBlock>
        </OrdersHeader>
        {cartItems.map((currentItem) => (
          <CheckoutItem
            key={currentItem.id}
            cartItem={currentItem}
          ></CheckoutItem>
        ))}
      </OrdersContent>
    </OrdersContainer>
  );
};

export default OrdersPage;
