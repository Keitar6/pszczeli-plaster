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

type UserMenuClosingHandlerType<T extends HTMLElement> = React.MouseEvent<
  T,
  MouseEvent
> & {
  target: T;
};

export const UserMenuModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartQuantity = useAppSelector(selectCartCount);

  const userMenuOnClickHandler = (
    event: UserMenuClosingHandlerType<HTMLDivElement>
  ): void => {
    if (event.target.id === "UserMenuContainer") {
      dispatch(toggleUserMenu());
    }
  };

  const goToCheckoutHandler = () => {
    if (isCartEmpty(cartQuantity)) {
      navigate("/podsumowanie");
      dispatch(toggleUserMenu());
    }
  };

  const goToOrdersHandler = () => {
    navigate("/historiaZamowien");
    dispatch(toggleUserMenu());
  };

  return (
    <Modal>
      <UserMenu
        id="UserMenuContainer"
        onClick={(e) => {
          userMenuOnClickHandler(
            e as UserMenuClosingHandlerType<HTMLDivElement>
          );
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
