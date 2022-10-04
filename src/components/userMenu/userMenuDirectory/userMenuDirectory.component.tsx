import { Icon } from "@iconify/react";
import Button, { BUTTON_TYPE_CLASSES } from "../../button/button.component";

import {
  UserMenuLoginButtons,
  UserMenuFuncButtons,
  UserMenuFuncButton,
  UserMenuContainer
} from "./userMenuDirectory.styles";

export const UserMenuDirectory = () => {
  return (
    <UserMenuContainer>
      <UserMenuLoginButtons>
        <Button buttonType={BUTTON_TYPE_CLASSES.login}>Zaloguj się</Button>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Utwórz konto</Button>
      </UserMenuLoginButtons>
      <UserMenuFuncButtons>
        <UserMenuFuncButton buttonType={BUTTON_TYPE_CLASSES.base}>
          <Icon
            icon="icon-park-outline:history-query"
            color="#ffb703"
            width="32"
            height="32"
          />
          Historia zamówień
        </UserMenuFuncButton>
        <UserMenuFuncButton buttonType={BUTTON_TYPE_CLASSES.base}>
          <Icon
            icon="eva:shopping-cart-outline"
            color="#ffb703"
            width="32"
            height="32"
          />
          Koszyk
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
          <Icon icon="bytesize:work" color="#ffb703" width="32" height="32" />
          Zostań jednym z nas
        </UserMenuFuncButton>
      </UserMenuFuncButtons>
    </UserMenuContainer>
  );
};
