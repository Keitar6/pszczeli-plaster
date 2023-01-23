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
  UserMenuContainerMotion,
  GoToMyAccount
} from "./userMenu.styles";

import { toggleUserMenu } from "../../store/generalPropReducer/generalProp.actions";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { selectCartCount } from "../../store/cartReducer/cart.selector";
import { isCartEmpty } from "../../utils/reusableFunctions/isCartEmpty.function";
import {
  selectCurrentUser,
  selectCurrentUserData,
  selectCurrentUserFormData,
  selectIsLoadingUser
} from "../../store/userReducer/user.selector";

import { signOutAsync } from "../../store/userReducer/user.thunk";
import { AnimatePresence } from "framer-motion";
import { UserMenuVariants } from "../../utils/framer-motion/variants.utils";

export const UserMenuModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cartQuantity = useAppSelector(selectCartCount);
  const currentUser = useAppSelector(selectCurrentUser);
  const userData = useAppSelector(selectCurrentUserFormData);
  const isLoadingUser = useAppSelector(selectIsLoadingUser);
  const isUserLogedAndNotAnonym = currentUser && !currentUser.isAnonymous;

  const userMenuOnClickHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> & {
      target: { id: string };
    }
  ): void => {
    event.target.id === "UserMenuContainer" && dispatch(toggleUserMenu());
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

  const goToMyAccountHandler = () => {
    navigate("/mojeKonto");
    dispatch(toggleUserMenu());
  };

  const logOutHandler = () => {
    dispatch(signOutAsync());
  };

  return (
    <Modal>
      <UserMenu
        data-testid="userMenuOnClick"
        id="UserMenuContainer"
        onClick={(event) => {
          userMenuOnClickHandler(
            event as React.MouseEvent<HTMLDivElement, MouseEvent> & {
              target: { id: string };
            }
          );
        }}
      >
        <AnimatePresence custom={UserMenuVariants}>
          <UserMenuContainerMotion
            key="UserMenuMotion"
            variants={UserMenuVariants}
            initial="enter"
            animate="visible"
            exit="exit"
          >
            <UserMenuLogoContainer>
              <Icon
                icon="fluent-emoji-high-contrast:polar-bear"
                color="#ffb703"
                width="64"
                height="64"
              />
              <UserMenuLogoText>
                <H2>
                  {" "}
                  {`Cześć ${
                    !isUserLogedAndNotAnonym
                      ? "Gościu"
                      : currentUser !== null
                      ? userData.displayName
                      : userData.email
                  }`}
                </H2>
                <TextLink>
                  {" "}
                  <GoToMyAccount onClick={goToMyAccountHandler}>
                    {" "}
                    Moje konto
                  </GoToMyAccount>
                </TextLink>
              </UserMenuLogoText>
            </UserMenuLogoContainer>

            <UserMenuLoginButtons>
              <Button
                buttonType={BUTTON_TYPE_CLASSES.login}
                onClick={
                  isUserLogedAndNotAnonym ? logOutHandler : goToMyAccountHandler
                }
                isLoading={isLoadingUser}
              >
                {isUserLogedAndNotAnonym
                  ? "Wyloguj się"
                  : "Przejdź na stronę logowania"}
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
          </UserMenuContainerMotion>
        </AnimatePresence>
      </UserMenu>
    </Modal>
  );
};
