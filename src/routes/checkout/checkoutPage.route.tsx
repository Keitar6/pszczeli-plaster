import { useAppSelector } from "hooks/hooks";

import {
  CheckoutContainer,
  CheckoutSummaryContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  CheckoutFormContainer,
  FormTitle,
  SummaryTitle
} from "./checkoutPage.styles";
import {
  selectCartCount,
  selectCartItems,
  selectCartTotal
} from "store/cartReducer/cart.selector";
import { CheckoutItem } from "components/checkoutItem/checkoutItem.component";

import { CheckoutForm } from "components/checkoutForm/checkoutForm.component";
import { PLarge } from "global.styles";
import { selectDelivery } from "store/orderHistory/orderHistory.selector";
import { useEffect } from "react";
import { isCartEmpty } from "utils/reusableFunctions/isCartEmpty.function";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const cartItems = useAppSelector(selectCartItems);
  const totalCost = useAppSelector(selectCartTotal);
  const cartQuantity = useAppSelector(selectCartCount);
  const deliveryInfo = useAppSelector(selectDelivery);
  const navigate = useNavigate();
  const checkoutHeaders = {
    summary: "podsumowanie",
    product: "produkt",
    description: "Opis",
    quantity: "Ilość",
    price: "Cena",
    remove: "Usuń",
    formularz: "formularz",
    wSumie: "W sumie",
    deliveryPrice: "Przesyłka",
    productsPrice: "Cena towarów"
  };

  useEffect(() => {
    !isCartEmpty(cartQuantity) && navigate("/sklep");
  }, [cartQuantity]);

  return (
    <CheckoutContainer>
      <CheckoutFormContainer>
        <FormTitle>{`${checkoutHeaders.formularz.toUpperCase()}`}</FormTitle>
        <CheckoutForm />
      </CheckoutFormContainer>
      <CheckoutSummaryContainer>
        <SummaryTitle>{`${checkoutHeaders.summary.toUpperCase()}`}</SummaryTitle>
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
        <PLarge>{`${checkoutHeaders.deliveryPrice}: ${
          deliveryInfo.price ? deliveryInfo.price : 0
        }zł`}</PLarge>
        <PLarge>{`${checkoutHeaders.productsPrice}: ${totalCost}zł`}</PLarge>
        <Total>{`${checkoutHeaders.wSumie}: ${
          totalCost + deliveryInfo.price ? deliveryInfo.price : 0
        }zł`}</Total>
      </CheckoutSummaryContainer>
    </CheckoutContainer>
  );
};
export default CheckoutPage;
