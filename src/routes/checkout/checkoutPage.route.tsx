import { useAppSelector } from "hooks/hooks";

import {
  CheckoutContainer,
  CheckoutSummaryContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  CheckoutFormContainer
} from "./checkoutPage.styles";
import {
  selectCartItems,
  selectCartTotal
} from "store/cartReducer/cart.selector";
import CheckoutItem from "components/checkoutItem/checkoutItem.component";
import { H3 } from "global.styles";
import { CheckoutForm } from "components/checkoutForm/checkoutForm.component";

const CheckoutPage = () => {
  const cartItems = useAppSelector(selectCartItems);
  const totalCost = useAppSelector(selectCartTotal);

  const checkoutHeaders = {
    summary: "podsumowanie",
    product: "produkt",
    description: "Opis",
    quantity: "Ilość",
    price: "Cena",
    remove: "Usuń",
    formularz: "formularz",
    wSumie: "W sumie"
  };

  return (
    <CheckoutContainer>
      <CheckoutFormContainer>
        <H3> {`${checkoutHeaders.formularz.toUpperCase()}`} </H3>
        <CheckoutForm />
      </CheckoutFormContainer>

      <CheckoutSummaryContainer>
        <H3>{`${checkoutHeaders.summary.toUpperCase()}`}</H3>
        <CheckoutHeader>
          <HeaderBlock>{`${checkoutHeaders.product}`}</HeaderBlock>

          <HeaderBlock>{`${checkoutHeaders.description}`}</HeaderBlock>

          <HeaderBlock>{`${checkoutHeaders.quantity}`}</HeaderBlock>

          <HeaderBlock>{`${checkoutHeaders.price}`}</HeaderBlock>

          <HeaderBlock>{`${checkoutHeaders.remove}`}</HeaderBlock>
        </CheckoutHeader>

        {cartItems.map((currentItem) => (
          <CheckoutItem
            key={currentItem.id}
            cartItem={currentItem}
          ></CheckoutItem>
        ))}

        <Total>{`${checkoutHeaders.wSumie}: $${totalCost}`}</Total>
      </CheckoutSummaryContainer>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
