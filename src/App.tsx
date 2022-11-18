import { UserMenuModal } from "./components/userMenu/userMenu.component";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import {
  selectIsUserMenuOpened,
  selectIsProductCardOpened
} from "./store/generalPropReducer/generalProp.selector";
import {
  selectCartCount,
  selectCartItems,
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
import { selectOrderHistory } from "./store/orderHistory/orderHistory.selector";
import {
  setLoggStatus,
  setNextUser,
  setPreviousUser
} from "./store/userReducer/user.actions";
import { LOGIN_STATUS_TYPES } from "./store/userReducer/user.reducer";
import {
  selectCurrentUser,
  selectLoginStatus,
  selectNextUser,
  selectpPreviousUser,
  selectSort
} from "./store/userReducer/user.selector";
import {
  AdditionalInformation,
  UserData
} from "./store/userReducer/user.types";
import { setOrderHistory } from "./store/orderHistory/orderHistory.action";
import { useNavigate } from "react-router-dom";
import { setCartItems } from "./store/cartReducer/cart.actions";

function App() {
  const dispatch = useAppDispatch();
  const isUserMenuOpened = useAppSelector(selectIsUserMenuOpened);
  const isCartMenuOpened = useAppSelector(selectIsCartMenuOpened);
  const isProductCardOpened = useAppSelector(selectIsProductCardOpened);
  const currentCartItems = useAppSelector(selectCartItems);
  const initOrderHistory = useAppSelector(selectOrderHistory);
  const cartQuantity = useAppSelector(selectCartCount);
  const previousUser = useAppSelector(selectpPreviousUser);
  const logStatus = useAppSelector(selectLoginStatus);
  const currentUser = useAppSelector(selectCurrentUser);
  const nextUser = useAppSelector(selectNextUser);
  const sortType = useAppSelector(selectSort);
  const navigate = useNavigate();

  const loginHandler = (user: UserData | null) => {
    dispatch(setPreviousUser());
    dispatch(signInAsync(user));
  };

  const settingUserHandler = (
    userAuth: User,
    additionalInfos?: AdditionalInformation
  ) => {
    dispatch(createUsersDocumentAsync(userAuth, additionalInfos));
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

  async function userManagement() {
    console.log(
      "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa"
    );

    if (currentUser !== null && !currentUser.isAnonymous) {
      settingUserHandler(currentUser as User, {
        cartItems: currentCartItems,
        orderHistory: initOrderHistory,
        photoUrl: (currentUser as User).photoURL
      });

      location.href === "http://localhost:3005/mojeKonto" && navigate("/");
      dispatch(setLoggStatus(LOGIN_STATUS_TYPES.LOGGED_IN));
    } else if (currentUser === null) {
      // after logout

      if (
        logStatus === LOGIN_STATUS_TYPES.LOGGED_IN &&
        previousUser.status !== null
      ) {
        dispatch(setLoggStatus(LOGIN_STATUS_TYPES.LOGGED_OUT));
        dispatch(setOrderHistory([]));
        dispatch(setCartItems([]));
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
