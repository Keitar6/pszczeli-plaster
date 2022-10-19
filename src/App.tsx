import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./components/spinner/spinner.component";
import { GlobalStyle } from "./global.styles";
import { UserMenuModal } from "./components/userMenu/userMenu.component";
import { useAppSelector } from "./hooks/hooks";
import {
  selectIsUserMenuOpened,
  selectIsProductCardOpened
} from "./store/generalPropReducer/generalProp.selector";
import {
  selectCartCount,
  selectIsCartMenuOpened
} from "./store/cartReducer/cart.selector";
import { CartModal } from "./components/cartModal/cart.component";
import { NaviPath } from "./components/shopDirectory/shopNavi/naviPath.component";
import { ProductDetailsModal } from "./components/productDetailsModal/productDetailsModal.component";
import { isCartEmpty } from "./utils/reusableFunctions/isCartEmpty.function";

const Navigation = lazy(() => import("./routes/navigation/navigation.route"));
const Home = lazy(() => import("./routes/home/homePage.route"));
const Shop = lazy(() => import("./routes/shopPage/shopPage.route"));
const CheckoutPage = lazy(() => import("./routes/checkout/checkoutPage.route"));
const OrdersPage = lazy(() => import("./routes/orders/ordersPage.route"));

function App() {
  const isUserMenuOpened = useAppSelector(selectIsUserMenuOpened);
  const isCartMenuOpened = useAppSelector(selectIsCartMenuOpened);
  const isProductCardOpened = useAppSelector(selectIsProductCardOpened);
  const cartQuantity = useAppSelector(selectCartCount);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <BrowserRouter>
        <div id="modal"></div>
        {isUserMenuOpened ? (
          <UserMenuModal />
        ) : isCartMenuOpened && isCartEmpty(cartQuantity) ? (
          <CartModal />
        ) : isProductCardOpened ? (
          <ProductDetailsModal />
        ) : null}

        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="sklep" element={<NaviPath />}>
              <Route index element={<Shop />} />
              <Route path="/sklep/:id" element={<Shop />} />
            </Route>
            <Route path="podsumowanie" element={<CheckoutPage />} />
            <Route path="historiaZamowien" element={<OrdersPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
