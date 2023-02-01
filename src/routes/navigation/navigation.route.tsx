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

import { refresh } from "../../utils/reusableFunctions/refresh.function";
import { toggleCartMenu } from "../../store/cartReducer/cart.actions";
import {
  selectCartCount,
  selectCartItems
} from "../../store/cartReducer/cart.selector";
import { isCartEmpty } from "../../utils/reusableFunctions/isCartEmpty.function";
import { selectOrderHistory } from "../../store/orderHistory/orderHistory.selector";
import {
  selectCurrentUser,
  selectCurrentUserData
} from "../../store/userReducer/user.selector";
import { debounce } from "lodash";
import { updateUsersCartItems } from "../../utils/firebase/functions/dbManipulationFunctions.FBFunctions";
import { type User } from "firebase/auth";
import { useEffect, useMemo } from "react";
import { NavbarAndFooterVariants } from "../../utils/framer-motion/variants.utils";

import { motion } from "framer-motion";

const Navigation = () => {
  const isUserMenuOpened = useAppSelector(selectIsUserMenuOpened);
  const dispatch = useAppDispatch();
  const cartQuantity = useAppSelector(selectCartCount);
  const cartItems = useAppSelector(selectCartItems);
  const orderHistory = useAppSelector(selectOrderHistory);
  const currentUser = useAppSelector(selectCurrentUser);
  const userDatabaseData = useAppSelector(selectCurrentUserData);

  const debounced = useMemo(
    () =>
      debounce(function (user, items) {
        user !== null
          ? updateUsersCartItems(
              user as User,
              {
                currentCartItems: items,
                currentUserOrderHistory: orderHistory
              },
              userDatabaseData
            )
          : () => console.log("DEBOUNCEEE FAILED");
      }, 2000),
    [userDatabaseData]
  );

  const userMenuHandler = () => dispatch(toggleUserMenu());
  const logoClickHandler = () => refresh();

  const cartDropdownHandler = () =>
    isCartEmpty(cartQuantity) && dispatch(toggleCartMenu());

  useEffect(() => {
    debounced(currentUser, cartItems);
  }, [cartItems]);

  return (
    <StructurizeComponent>
      <motion.div
        variants={NavbarAndFooterVariants}
        initial="enter"
        animate="visible"
        exit="exit"
      >
        <NavigationContainer>
          <LogoContainer>
            <Logo to="/" onClick={logoClickHandler} data-testid="logoClick">
              <Icon icon={naviIcons.honeyBee} width="42" height="42" />
            </Logo>
          </LogoContainer>
          <BrandName>Pszczeli Plaster</BrandName>
          <IconsContainer>
            <ModalsTogglersIconsContainer>
              <div
                onClick={cartDropdownHandler}
                role="presentation"
                data-testid="cartDropdown"
              >
                <CartIcon />
              </div>
              <div
                onClick={userMenuHandler}
                role="presentation"
                data-testid="userMenu"
              >
                <HamburgerIcon
                  label="Show user menu"
                  rounded
                  toggled={isUserMenuOpened}
                />
              </div>
            </ModalsTogglersIconsContainer>
          </IconsContainer>
        </NavigationContainer>
      </motion.div>

      <Outlet />
      <motion.div
        variants={NavbarAndFooterVariants}
        initial="enter"
        animate="visible"
        exit="exit"
      >
        <Footer />
      </motion.div>
    </StructurizeComponent>
  );
};
export default Navigation;
