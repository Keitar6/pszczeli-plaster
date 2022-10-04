import { useAppSelector } from "hooks/hooks";

import {
  CheckoutContainer,
  CheckoutSummaryContainer,
  CheckoutHeader,
  HeaderBlock,
  Total
} from "./checkoutPage.styles";
import {
  selectCartItems,
  selectCartTotal
} from "store/cartReducer/cart.selector";
import CheckoutItem from "components/checkoutItem/checkoutItem.component";
import { H3 } from "global.styles";

const CheckoutPage = () => {
  const cartItems = useAppSelector(selectCartItems);
  const totalCost = useAppSelector(selectCartTotal);

  const checkoutHeaders = {
    summary: "summary",
    product: "Product",
    description: "Description",
    quantity: "Quantity",
    price: "Product",
    remove: "Remove",
    formularz: "formularz"
  };

  return (
    <CheckoutContainer>
      <div className="CheckoutForm">
        {`${checkoutHeaders.formularz.toUpperCase()}`}{" "}
      </div>

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

        <Total>{`Total: $${totalCost}`}</Total>
      </CheckoutSummaryContainer>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
