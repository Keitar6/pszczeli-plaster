import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { selectTheme } from "../../store/generalPropReducer/generalProp.selector";
import "./navigation.styles.css";
import Hamburger from "hamburger-react";
import { selectIsUserMenuOpened } from "../../store/userReducer/user.selector";

const Navigation = () => {
  const theme = useSelector(selectTheme);
  const isUserMenuOpened = useSelector(selectIsUserMenuOpened);
  console.log(theme);

  return (
    <div>
      <nav className="navigation-container">
        <div to="/">Cool Logo</div>
        <h2>Very cool name of the Application</h2>
        <nav className="nav-container">
          {/* {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/authentication">SIGN IN</NavLink>
          )} */}
          <CartIcon />
          <Hamburger rounded toggled={isUserMenuOpened} />
        </nav>
      </nav>
      <Outlet />
    </div>
  );
};
export default Navigation;
