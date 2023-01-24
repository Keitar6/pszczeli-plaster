import { AnimatePresence } from "framer-motion";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { NaviPath } from "./components/shopDirectory/shopNavi/shopNavi.component";

const Navigation = lazy(() => import("./routes/navigation/navigation.route"));
const Home = lazy(() => import("./routes/home/homePage.route"));
const Shop = lazy(() => import("./routes/shopPage/shopPage.route"));
const CheckoutPage = lazy(() => import("./routes/checkout/checkoutPage.route"));
const OrdersPage = lazy(() => import("./routes/orders/ordersPage.route"));
const MyAccountPage = lazy(
  () => import("./routes/myAccount/myAccountPage.route")
);

export const Routing = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="sklep" element={<NaviPath />}>
            <Route index element={<Shop />} />
            <Route path="/sklep/:id" element={<Shop />} />
          </Route>
          <Route path="podsumowanie" element={<CheckoutPage />} />
          <Route path="historiaZamowien" element={<OrdersPage />} />
          <Route path="mojeKonto" element={<MyAccountPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
