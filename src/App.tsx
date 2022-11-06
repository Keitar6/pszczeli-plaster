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
  userAuth
} from "./utils/firebase/firebase.utils";
import { onAuthStateChanged } from "firebase/auth";
import { signInAsync } from "./store/userReducer/user.thunk";
import { useNavigate } from "react-router-dom";
import { selectOrderHistory } from "./store/orderHistory/orderHistory.selector";
import { setCartItems } from "./store/cartReducer/cart.actions";
import { setLoggStatus } from "./store/userReducer/user.actions";
import { LOGIN_STATUS_TYPES } from "./store/userReducer/user.reducer";
import { selectLoginStatus } from "./store/userReducer/user.selector";

function App() {
  const dispatch = useAppDispatch();
  const isUserMenuOpened = useAppSelector(selectIsUserMenuOpened);
  const isCartMenuOpened = useAppSelector(selectIsCartMenuOpened);
  const isProductCardOpened = useAppSelector(selectIsProductCardOpened);
  const currentCartItems = useAppSelector(selectCartItems);
  const initOrderHistory = useAppSelector(selectOrderHistory);
  const cartQuantity = useAppSelector(selectCartCount);
  const logStatus = useAppSelector(selectLoginStatus);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("APP USE EFFECT USER: ", user);
    onAuthStateChanged(userAuth, (currentUserAuth) => {
      // signed in user management
      console.log(currentUserAuth);

      (async function userManagement() {
        console.log("APP USE EFFECT USER: ", currentUserAuth);
        console.log("APP USE EFFECT CART: ", currentCartItems);

        dispatch(signInAsync(currentUserAuth));
        if (currentUserAuth !== null && !currentUserAuth.isAnonymous) {
          dispatch(setLoggStatus(LOGIN_STATUS_TYPES.LOGGED_IN));
          const userData = await createUserDocumentFromAuth(currentUserAuth, {
            photoUrl: currentUserAuth.photoURL,
            cartItems: currentCartItems,
            orderHistory: initOrderHistory
          });
          if (userData) {
            const { cartItems, orderHistory } = userData;

            console.log(
              "currentCartItems + cartItems after login: ",
              cartItems,
              " + ",
              currentCartItems
            );
            dispatch(setCartItems([...cartItems]));
            // dispatch(addTo(orderHistory))
          }
          navigate("/sklep");
        } else if (currentUserAuth === null) {
          if(logStatus === LOGIN_STATUS_TYPES.LOGGED_IN){
            dispatch(setLoggStatus(LOGIN_STATUS_TYPES.LOGGED_OUT));
            
            // Update CartItems and Orders in Firestore
            
          }
        }
      })();
    });

    return () => {
      // CartItems and OrderHistory on db update on unmount
    };
  }, []);

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
