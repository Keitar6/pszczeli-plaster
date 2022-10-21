import { Icon } from "@iconify/react";
import { H2, TextLink } from "../../global.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import Modal from "../modal/modal.component";
import {
  UserMenu,
  UserMenuLoginButtons,
  UserMenuLogoContainer,
  UserMenuLogoText,
  UserMenuFuncButtons,
  UserMenuFuncButton,
  UserMenuContainer
} from "./userMenu.styles";

import { toggleUserMenu } from "../../store/generalPropReducer/generalProp.actions";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { selectCartCount } from "../../store/cartReducer/cart.selector";
import { isCartEmpty } from "../../utils/reusableFunctions/isCartEmpty.function";

export const UserMenuModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartQuantity = useAppSelector(selectCartCount);

  const userMenuOnClickHandler = (): void => {
    dispatch(toggleUserMenu());
  };

  const goToCheckoutHandler = () => {
    if (isCartEmpty(cartQuantity)) {
      navigate("/podsumowanie");
    }
  };

  const goToOrdersHandler = () => {
    navigate("/historiaZamowien");
  };

  return (
    <Modal>
      <UserMenu
        data-testid="userMenuOnClick"
        id="UserMenuContainer"
        onClick={() => {
          userMenuOnClickHandler();
        }}
      >
        <UserMenuContainer>
          <UserMenuLogoContainer>
            <Icon
              icon="fluent-emoji-high-contrast:polar-bear"
              color="#ffb703"
              width="64"
              height="64"
            />
            <UserMenuLogoText>
              <H2>Cześć (nazwa użytkownika)</H2>
              <TextLink>Moje konto</TextLink>
            </UserMenuLogoText>
          </UserMenuLogoContainer>
          <UserMenuLoginButtons>
            <Button buttonType={BUTTON_TYPE_CLASSES.login}>Zaloguj się</Button>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>
              Utwórz konto
            </Button>
          </UserMenuLoginButtons>
          <UserMenuFuncButtons>
            <UserMenuFuncButton
              data-testid="goToOrders"
              onClick={goToOrdersHandler}
              buttonType={BUTTON_TYPE_CLASSES.base}
            >
              <Icon
                icon="icon-park-outline:history-query"
                color="#ffb703"
                width="32"
                height="32"
              />
              Historia Zamówień
            </UserMenuFuncButton>
            <UserMenuFuncButton
              data-testid="goToCheckout"
              onClick={goToCheckoutHandler}
              buttonType={BUTTON_TYPE_CLASSES.base}
            >
              <Icon
                icon="eva:shopping-cart-outline"
                color="#ffb703"
                width="32"
                height="32"
              />
              {isCartEmpty(cartQuantity)
                ? "Podsumowanie"
                : "Wprowadź elementy do koszyka"}
            </UserMenuFuncButton>
            <UserMenuFuncButton buttonType={BUTTON_TYPE_CLASSES.base}>
              <Icon
                icon="ic:outline-favorite-border"
                color="#ffb703"
                width="32"
                height="32"
              />
              Ulubione
            </UserMenuFuncButton>
            <UserMenuFuncButton buttonType={BUTTON_TYPE_CLASSES.base}>
              <Icon
                icon="bytesize:work"
                color="#ffb703"
                width="32"
                height="32"
              />
              Zostań jednym z nas
            </UserMenuFuncButton>
          </UserMenuFuncButtons>
        </UserMenuContainer>
      </UserMenu>
    </Modal>
  );
};
