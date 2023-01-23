import { Icon } from "@iconify/react";
import { H2 } from "../../global.styles";

import Modal from "../modal/modal.component";
import {
  Cart,
  CartLogoContainer,
  CartLogoText,
  CartGoToCheckout,
  CartWrapperMotion,
  CartItemsMotionWrapper
} from "./cart.styles";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { toggleCartMenu } from "../../store/cartReducer/cart.actions";
import {
  selectCartItems,
  selectCartTotal
} from "../../store/cartReducer/cart.selector";
import { CartCard } from "./cartCard/cartCard.component";
import Button, {
  BUTTON_TYPE_CLASSES
} from "../../components/button/button.component";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../../store/cartReducer/cart.types";

import { AnimatePresence } from "framer-motion";
import {
  CartVariants,
  CartItemsVariants
} from "../../utils/framer-motion/variants.utils";

export const CartModal = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/podsumowanie");
    dispatch(toggleCartMenu());
  };

  const cartClosingHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> & {
      target: { id: string };
    }
  ): void => {
    event.target.id === "CartContainer" && dispatch(toggleCartMenu());
  };

  return (
    <Modal>
      <Cart
        data-testid="cartClosingCheck"
        id="CartContainer"
        onClick={(event) => {
          cartClosingHandler(
            event as React.MouseEvent<HTMLDivElement, MouseEvent> & {
              target: { id: string };
            }
          );
        }}
      >
        <AnimatePresence custom={CartVariants}>
          <CartWrapperMotion
            key="CartModalMotion"
            variants={CartVariants}
            initial="enter"
            animate="visible"
            exit="exit"
          >
            <CartLogoContainer>
              <Icon
                icon="fluent-emoji-high-contrast:polar-bear"
                color="#ffb703"
                width="64"
                height="64"
              />
              <CartLogoText>
                <H2>Koszyk</H2>
              </CartLogoText>
            </CartLogoContainer>

            <div data-testid="cartMapElements">
              {cartItems.map((cartItem: CartItem, index: number) => {
                return (
                  <CartItemsMotionWrapper
                    key={cartItem.id}
                    variants={CartItemsVariants}
                    custom={index}
                    initial="enter"
                    animate="visible"
                    exit="exit"
                  >
                    <CartCard cartItem={cartItem} />
                  </CartItemsMotionWrapper>
                );
              })}
            </div>
            <CartGoToCheckout>
              <Button
                data-testid="goToCheckout"
                onClick={goToCheckoutHandler}
                buttonType={BUTTON_TYPE_CLASSES.cartFuncButton}
              >{`${"Do kasy"}`}</Button>
              {`W sumie: ${cartTotal}zł`}
            </CartGoToCheckout>
          </CartWrapperMotion>
        </AnimatePresence>
      </Cart>
    </Modal>
  );
};
