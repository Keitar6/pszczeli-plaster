import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useAppDispatch } from "../../hooks/hooks";

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

import { toggleUserMenu } from "store/generalPropReducer/generalProp.actions";
import { selectIsUserMenuOpened } from "store/generalPropReducer/generalProp.selector";
import { InputBar } from "../../components/inputBar/inputBar.component";

import { refresh } from "utils/reusableFunctions/refresh.function";
import { toggleCartMenu } from "store/cartReducer/cart.actions";

const Navigation = () => {
  const isUserMenuOpened = useSelector(selectIsUserMenuOpened);
  const dispatch = useAppDispatch();

  const userMenuHandler = () => dispatch(toggleUserMenu());
  const logoClickHandler = () => refresh();

  const cartDropdownHandler = () => dispatch(toggleCartMenu());

  return (
    <>
      <NavigationContainer>
        <Logo to="/" onClick={logoClickHandler}>
          <Icon icon={naviIcons.honeyBee} width="42" height="42" />
        </Logo>
        <BrandName>Pszczeli Plaster</BrandName>
        <IconsContainer>
          <InputBar whereTo="shop" />
          <div onClick={cartDropdownHandler} onKeyDown={cartDropdownHandler} role="presentation">
            <CartIcon />
          </div>
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
