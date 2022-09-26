import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useAppDispatch } from "../../types/hooks/hooks";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import { Icon } from "@iconify/react";
import {
  BrandName,
  IconsContainer,
  Logo,
  NavigationContainer,
  HamburgerIcon
} from "./navigation.styles";

import { Footer } from "../../components/footer/footer.component";

import { toggleUserMenu } from "../../store/userReducer/user.actions";
import { selectIsUserMenuOpened } from "../../store/userReducer/user.selector";

const Navigation = () => {
  const isUserMenuOpened = useSelector(selectIsUserMenuOpened);
  const dispatch = useAppDispatch();

  const userMenuHandler = () => dispatch(toggleUserMenu());

  return (
    <Fragment>
      <NavigationContainer>
        <Logo to="/">
          <Icon icon="noto:honeybee" width="42" height="42" />
        </Logo>
        <BrandName>Pszczeli Plaster</BrandName>
        <IconsContainer>
          <Icon
            icon="fluent:inprivate-account-20-filled"
            width="42"
            height="42"
            cursor="pointer"
          />
          <Icon icon="fa:language" width="42" height="42" cursor="pointer" />
          <CartIcon />
          <HamburgerIcon
            label="Show user menu"
            rounded
            toggle={userMenuHandler}
            toggled={isUserMenuOpened}
          />
        </IconsContainer>
      </NavigationContainer>
      <Outlet />
      <Footer />
    </Fragment>
  );
};
export default Navigation;
