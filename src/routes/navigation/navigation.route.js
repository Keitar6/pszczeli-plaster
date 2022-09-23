import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { selectTheme } from "../../store/generalPropReducer/generalProp.selector";
import { selectIsUserMenuOpened } from "../../store/userReducer/user.selector";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import Hamburger from "hamburger-react";
import { Icon } from "@iconify/react";
import {
  BrandName,
  IconsContainer,
  Logo,
  NavigationContainer
} from "./navigation.styles";
import { Fragment } from "react";
import { Footer } from "../../components/footer/footer.component";

const Navigation = () => {
  const theme = useSelector(selectTheme);
  const isUserMenuOpened = useSelector(selectIsUserMenuOpened);
  console.log(theme);

  return (
    <Fragment>
      <NavigationContainer>
        <Logo>
          <Icon icon="noto:honeybee" width="42" height="42" />
        </Logo>
        <BrandName>Pszczeli Plaster</BrandName>
        <IconsContainer>
          <Icon
            icon="fluent:inprivate-account-20-filled"
            width="42"
            height="42"
          />
          <Icon icon="fa:language" width="42" height="42"/>
          <CartIcon />
          <Hamburger rounded toggled={isUserMenuOpened} />
        </IconsContainer>
      </NavigationContainer>
      <Outlet />
      <Footer/>
    </Fragment>
  );
};
export default Navigation;
