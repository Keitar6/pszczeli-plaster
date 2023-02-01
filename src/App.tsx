import { UserMenuModal } from "./components/userMenu/userMenu.component";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import {
  selectIsUserMenuOpened,
  selectIsProductCardOpened
} from "./store/generalPropReducer/generalProp.selector";
import {
  selectCartCount,
  selectIsCartMenuOpened
} from "./store/cartReducer/cart.selector";
import { CartModal } from "./components/cartModal/cart.component";
import { ProductDetailsModal } from "./components/productDetailsModal/productDetailsModal.component";
import { isCartEmpty } from "./utils/reusableFunctions/isCartEmpty.function";
import { Routing } from "./routing";
import { useEffect } from "react";
import { userAuth } from "./utils/firebase/firebase.utils";
import { onAuthStateChanged, type User } from "firebase/auth";
import {
  createUsersDocumentAsync,
  getUsersDataAsync,
  signInAsync
} from "./store/userReducer/user.thunk";
import {
  setLoggStatus,
  setNextUser,
  setPreviousUser
} from "./store/userReducer/user.actions";
import { LOGIN_STATUS_TYPES } from "./store/userReducer/user.reducer";
import {
  selectCurrentUser,
  selectCurrentUserFormData,
  selectLoginStatus,
  selectNextUser,
  selectpPreviousUser,
  selectSort
} from "./store/userReducer/user.selector";
import { UserData } from "./store/userReducer/user.types";
import { setOrderHistory } from "./store/orderHistory/orderHistory.action";
import { setCartItems } from "./store/cartReducer/cart.actions";
import { CART_INITIAL_STATE } from "./store/cartReducer/cart.reducer";
import { ORDER_HISTORY_INITIAL_STATE } from "./store/orderHistory/orderHistory.reducer";

function App() {
  const dispatch = useAppDispatch();
  const isUserMenuOpened = useAppSelector(selectIsUserMenuOpened);
  const isCartMenuOpened = useAppSelector(selectIsCartMenuOpened);
  const isProductCardOpened = useAppSelector(selectIsProductCardOpened);
  const currentUserFormData = useAppSelector(selectCurrentUserFormData);
  const cartQuantity = useAppSelector(selectCartCount);
  const previousUser = useAppSelector(selectpPreviousUser);
  const logStatus = useAppSelector(selectLoginStatus);
  const currentUser = useAppSelector(selectCurrentUser);
  const nextUser = useAppSelector(selectNextUser);

  const loginHandler = (user: UserData | null) => {
    dispatch(setPreviousUser());
    dispatch(signInAsync(user));
  };

  const settingUserHandler = (userAuth: User) => {
    userAuth &&
      dispatch(createUsersDocumentAsync(userAuth, { ...currentUserFormData }));
    dispatch(getUsersDataAsync(userAuth));
  };

  useEffect(() => {
    onAuthStateChanged(userAuth, (currentUserAuth) => {
      dispatch(setNextUser(currentUserAuth));
    });
  }, []);

  useEffect(() => {
    loginHandler(nextUser);
  }, [nextUser]);

  useEffect(() => {
    userManagement();
  }, [currentUser]);

  function userManagement() {
    if (currentUser !== null) {
      settingUserHandler(currentUser as User);
      dispatch(setLoggStatus(LOGIN_STATUS_TYPES.LOGGED_IN));
    } else if (currentUser === null) {
      if (
        logStatus === LOGIN_STATUS_TYPES.LOGGED_IN &&
        previousUser.status !== null
      ) {
        dispatch(setLoggStatus(LOGIN_STATUS_TYPES.LOGGED_OUT));
        dispatch(setOrderHistory(ORDER_HISTORY_INITIAL_STATE["orderHistory"]));
        dispatch(setCartItems(CART_INITIAL_STATE["cartItems"]));
      }
    }
  }

  return (
    <>
      <div id="modal" data-testid="modal"></div>
      {isUserMenuOpened ? (
        <UserMenuModal />
      ) : isCartMenuOpened && isCartEmpty(cartQuantity) ? (
        <CartModal />
      ) : isProductCardOpened ? (
        <ProductDetailsModal />
      ) : null}

      <Routing />
    </>
  );
}

export default App;
