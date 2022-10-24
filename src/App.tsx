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
import { signInAnonymous } from "./utils/firebase/firebase.utils";
import { setUser } from "./store/userReducer/user.actions";
import { selectCurrentUser } from "./store/userReducer/user.selector";

function App() {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const isUserMenuOpened = useAppSelector(selectIsUserMenuOpened);
  const isCartMenuOpened = useAppSelector(selectIsCartMenuOpened);
  const isProductCardOpened = useAppSelector(selectIsProductCardOpened);
  const cartQuantity = useAppSelector(selectCartCount);

  useEffect(() => {
    // dispatch(setUser(signInAnonymous()));
    console.log(currentUser);
    console.log((signInAnonymous()));
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
