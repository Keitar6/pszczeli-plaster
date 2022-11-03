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
import { onAuthStateChanged } from "firebase/auth";
import {
  signInAnynomousAsync,
  signInAsync
} from "./store/userReducer/user.thunk";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useAppDispatch();
  const isUserMenuOpened = useAppSelector(selectIsUserMenuOpened);
  const isCartMenuOpened = useAppSelector(selectIsCartMenuOpened);
  const isProductCardOpened = useAppSelector(selectIsProductCardOpened);
  const cartQuantity = useAppSelector(selectCartCount);
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("APP USE EFFECT USER: ", user);
    onAuthStateChanged(userAuth, (currentUserAuth) => {
      console.log("APP USE EFFECT USER: ", currentUserAuth);

      dispatch(signInAsync(currentUserAuth));

      if (currentUserAuth === null) return dispatch(signInAnynomousAsync());

      if (currentUserAuth !== null && !currentUserAuth.isAnonymous)
        navigate("/sklep");
    });
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
