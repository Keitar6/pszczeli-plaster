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
import {
  createUserDocumentFromAuth,
  updateUsersCartItems,
  userAuth
} from "./utils/firebase/firebase.utils";
import { onAuthStateChanged, type User } from "firebase/auth";
import { signInAsync } from "./store/userReducer/user.thunk";
import { useNavigate } from "react-router-dom";
import { selectOrderHistory } from "./store/orderHistory/orderHistory.selector";
import { setCartItems } from "./store/cartReducer/cart.actions";
import { setLoggStatus } from "./store/userReducer/user.actions";
import { LOGIN_STATUS_TYPES } from "./store/userReducer/user.reducer";
import {
  selectCurrentUser,
  selectLoginStatus,
  selectSort
} from "./store/userReducer/user.selector";
import { UserFromDBData } from "./store/userReducer/user.types";

function App() {
  const dispatch = useAppDispatch();
  const isUserMenuOpened = useAppSelector(selectIsUserMenuOpened);
  const isCartMenuOpened = useAppSelector(selectIsCartMenuOpened);
  const isProductCardOpened = useAppSelector(selectIsProductCardOpened);
  const currentCartItems = useAppSelector(selectCartItems);
  const initOrderHistory = useAppSelector(selectOrderHistory);
  const cartQuantity = useAppSelector(selectCartCount);
  const logStatus = useAppSelector(selectLoginStatus);
  const currentUser = useAppSelector(selectCurrentUser);
  const sortType = useAppSelector(selectSort);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(userAuth, (currentUserAuth) => {
      // signed in user management
      let userDatabaseData: UserFromDBData | null = null;
      (async function userManagement() {
        console.log("BEFORE ANYTHING current user: ", currentUser);

        if (currentUserAuth !== null && !currentUserAuth.isAnonymous) {
          userDatabaseData = await createUserDocumentFromAuth(currentUserAuth, {
            photoUrl: currentUserAuth.photoURL,
            cartItems: currentCartItems,
            orderHistory: initOrderHistory
          });
          // setting dbData to local variables
          if (userDatabaseData) {
            const { cartItems, orderHistory } = userDatabaseData;
            console.log(cartItems);
            dispatch(setCartItems([...cartItems]));
            // dispatch(addTo(orderHistory))
          }

          dispatch(setLoggStatus(LOGIN_STATUS_TYPES.LOGGED_IN));
        } else if (currentUserAuth === null) {
          console.log("current user: ", currentUser);
          console.log("logStatus: ", logStatus);

          if (
            logStatus === LOGIN_STATUS_TYPES.LOGGED_IN &&
            currentUser.status !== null
          ) {
            dispatch(setLoggStatus(LOGIN_STATUS_TYPES.LOGGED_OUT));
            // Update CartItems and Orders in Firestore
            updateUsersCartItems(
              currentUser.status as User,
              currentCartItems,
              currentUser.userDatabaseData
            );
          }
        }

        console.log("BEFORE SETTING USER current user: ", currentUser);

        dispatch(signInAsync({ status: currentUserAuth, userDatabaseData }));
      })();
    });
  }, [currentUser.status, logStatus]);

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
