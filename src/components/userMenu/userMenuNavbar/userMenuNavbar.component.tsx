import { Icon } from "@iconify/react";
import { Outlet } from "react-router-dom";
import { H2, TextLink } from "../../../global.styles";

import {
  UserMenuLogoContainer,
  UserMenuLogoText
} from "./userMenuNavbar.styles";

export const UserMenuNavbar = () => {
  return (
    <>
      <UserMenuLogoContainer>
        <Icon
          icon="fluent-emoji-high-contrast:polar-bear"
          color="#ffb703"
          width="64"
          height="64"
        />
        <UserMenuLogoText>
          <H2>Cześć (imie użytkownika)</H2>
          <TextLink>Moje konto</TextLink>
        </UserMenuLogoText>
      </UserMenuLogoContainer>

      <Outlet />
    </>
  );
};
