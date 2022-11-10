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
import { updateUsersCartItems } from "./utils/firebase/functions/dbManipulationFunctions.FBFunctions";

function App() {
  const dispatch = useAppDispatch();
  const isUserMenuOpened = useAppSelector(selectIsUserMenuOpened);
  const isCartMenuOpened = useAppSelector(selectIsCartMenuOpened);
  const isProductCardOpened = useAppSelector(selectIsProductCardOpened);
  const currentCartItems = useAppSelector(selectCartItems);
  const initOrderHistory = useAppSelector(selectOrderHistory);
  const cartQuantity = useAppSelector(selectCartCount);
  const logStatus = useAppSelector(selectLoginStatus);
  const previousUser = useAppSelector(selectpPreviousUser);
  const currentUser = useAppSelector(selectCurrentUser);
  const nextUser = useAppSelector(selectNextUser);
  const sortType = useAppSelector(selectSort);

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

  console.log("CART ITEMS AFTER RENDER: ", currentCartItems);

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
    console.log("BEFORE FIRST CONDITION current user: ", currentUser);
    console.log("BEFORE FIRST CONDITION logStatus: ", logStatus);
    console.log(
      "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa"
    );

    if (currentUser !== null && !currentUser.isAnonymous) {
      settingUserHandler(currentUser as User, {
        cartItems: currentCartItems,
        orderHistory: initOrderHistory,
        photoUrl: (currentUser as User).photoURL
      });

      dispatch(setLoggStatus(LOGIN_STATUS_TYPES.LOGGED_IN));
    } else if (currentUser === null) {
      // after logout
      if (
        logStatus === LOGIN_STATUS_TYPES.LOGGED_IN &&
        previousUser.status !== null
      ) {
        dispatch(setLoggStatus(LOGIN_STATUS_TYPES.LOGGED_OUT));
        // Update CartItems and Orders in Firestore
        updateUsersCartItems(
          previousUser.status as User,
          currentCartItems,
          previousUser.userDatabaseData
        );
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
