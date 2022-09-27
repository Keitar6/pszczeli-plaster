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
  HamburgerIcon,
  naviIcons
} from "./navigation.styles";

import { Footer } from "../../components/footer/footer.component";

import { toggleUserMenu } from "../../store/userReducer/user.actions";
import { selectIsUserMenuOpened } from "../../store/userReducer/user.selector";
import { InputBar } from "../../components/inputBar/inputBar.component";

const Navigation = () => {
  const isUserMenuOpened = useSelector(selectIsUserMenuOpened);
  const dispatch = useAppDispatch();

  const userMenuHandler = () => dispatch(toggleUserMenu());

  return (
    <>
      <NavigationContainer>
        <Logo to="/">
          <Icon icon={naviIcons.honeyBee} width="42" height="42" />
        </Logo>
        <BrandName>Pszczeli Plaster</BrandName>
        <IconsContainer>
          <InputBar />
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
    </>
  );
};
export default Navigation;
