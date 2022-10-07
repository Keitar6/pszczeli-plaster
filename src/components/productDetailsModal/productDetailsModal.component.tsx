import { Icon } from "@iconify/react";
import { H2, TextLink } from "../../global.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import Modal from "../modal/modal.component";
import {
  UserMenu,
  UserMenuLogoContainer,
  UserMenuLogoText,
  UserMenuContainer
} from "./productDetailsModal.styles";

import { toggleProductCard } from "store/generalPropReducer/generalProp.actions";
import { useAppDispatch } from "../../hooks/hooks";
import React from "react";

type UserMenuClosingHandlerType<T extends HTMLElement> = React.MouseEvent<
  T,
  MouseEvent
> & {
  target: T;
};

export const ProductDetailsModal = () => {
  const dispatch = useAppDispatch();

  const userMenuOnClickHandler = (
    event: UserMenuClosingHandlerType<HTMLDivElement>
  ): void => {
    if (event.target.id === "UserMenuContainer") {
      dispatch(toggleProductCard());
    }
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
              <H2>Przedstawiam (nazwa produktu)</H2>
            </UserMenuLogoText>
          </UserMenuLogoContainer>

          
        </UserMenuContainer>
      </UserMenu>
    </Modal>
  );
};
