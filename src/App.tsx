
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./components/spinner/spinner.component";
import { GlobalStyle } from "./global.styles";
import { AuthModal } from "./components/userMenu/userMenu.component";
import { useAppSelector } from "./types/hooks/hooks";
import { selectIsUserMenuOpened } from "./store/userReducer/user.selector";

const Navigation = lazy(() => import("./routes/navigation/navigation.route"));
const Home = lazy(() => import("./routes/home/homePage.route"));
const Shop = lazy(() => import("./routes/shopPage/shopPage.route"));
const Checkout = lazy(() => import("./routes/checkout/checkoutPage.route"));

function App() {
  const isUserMenuOpened = useAppSelector(selectIsUserMenuOpened);
  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <BrowserRouter>
        <div id="modal"></div>
        {isUserMenuOpened ? <AuthModal /> : null}
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
