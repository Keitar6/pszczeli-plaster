import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

import CartIcon from "../../components/cartIcon/cartIcon.component";
import { Icon } from "@iconify/react";
import {
  BrandName,
  IconsContainer,
  Logo,
  NavigationContainer,
  HamburgerIcon,
  naviIcons,
  StructurizeComponent,
  LogoContainer,
  ModalsTogglersIconsContainer
} from "./navigation.styles";

import { Footer } from "../../components/footer/footer.component";

import { toggleUserMenu } from "../../store/generalPropReducer/generalProp.actions";
import { selectIsUserMenuOpened } from "../../store/generalPropReducer/generalProp.selector";
import { InputBar } from "../../components/inputBar/inputBar.component";

import { refresh } from "../../utils/reusableFunctions/refresh.function";
import { toggleCartMenu } from "../../store/cartReducer/cart.actions";
import { selectCartCount } from "../../store/cartReducer/cart.selector";
import { isCartEmpty } from "../../utils/reusableFunctions/isCartEmpty.function";

const Navigation = () => {
  const isUserMenuOpened = useAppSelector(selectIsUserMenuOpened);
  const dispatch = useAppDispatch();
  const cartQuantity = useAppSelector(selectCartCount);

  const userMenuHandler = () => dispatch(toggleUserMenu());
  const logoClickHandler = () => refresh();

  const cartDropdownHandler = () =>
    isCartEmpty(cartQuantity) && dispatch(toggleCartMenu());

  return (
    <StructurizeComponent>
      <NavigationContainer>
        <LogoContainer>
          <Logo to="/" onClick={logoClickHandler}>
            <Icon icon={naviIcons.honeyBee} width="42" height="42" />
          </Logo>
        </LogoContainer>
        <BrandName>Pszczeli Plaster</BrandName>
        <IconsContainer>
          <InputBar whereTo="sklep" />
          <ModalsTogglersIconsContainer>
            <div onClick={cartDropdownHandler} role="presentation">
              <CartIcon />
            </div>
            <HamburgerIcon
              label="Show user menu"
              rounded
              toggle={userMenuHandler}
              toggled={isUserMenuOpened}
            />
          </ModalsTogglersIconsContainer>
        </IconsContainer>
      </NavigationContainer>
      <Outlet />
      <Footer />
    </StructurizeComponent>
  );
};
export default Navigation;
