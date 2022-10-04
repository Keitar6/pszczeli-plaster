import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./components/spinner/spinner.component";
import { GlobalStyle } from "./global.styles";
import { UserMenuModal } from "./components/userMenu/userMenu.component";
import { useAppSelector } from "./hooks/hooks";
import { selectIsUserMenuOpened } from "store/generalPropReducer/generalProp.selector";
import { NaviPath } from "./components/shopDirectory/shopNavi/naviPath.component";
import { selectIsCartMenuOpened } from "store/cartReducer/cart.selector";
import { CartModal } from "components/modal/cartModal/cart.component";

const Navigation = lazy(() => import("./routes/navigation/navigation.route"));
const Home = lazy(() => import("./routes/home/homePage.route"));
const Shop = lazy(() => import("./routes/shopPage/shopPage.route"));
const CheckoutPage = lazy(() => import("./routes/checkout/checkoutPage.route"));

function App() {
  const isUserMenuOpened = useAppSelector(selectIsUserMenuOpened);
  const isCartMenuOpened = useAppSelector(selectIsCartMenuOpened);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <BrowserRouter>
        {/* tutaj warunki pozmieniac*/}
        <div id="modal"></div>
        {isUserMenuOpened ? <UserMenuModal /> : null}

        {isCartMenuOpened ? <CartModal /> : null}

        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<NaviPath />}>
              <Route index element={<Shop />} />
              <Route path="/shop/:id" element={<Shop />} />
            </Route>
            <Route path="checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
