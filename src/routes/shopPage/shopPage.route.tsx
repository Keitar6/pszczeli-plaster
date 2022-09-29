import { Outlet } from "react-router-dom";
import ShopDirectory from "../../components/ShopDirectory/shopDirectory.component";

const ShopPage = () => {
  return (
    <>
      <Outlet />
      <ShopDirectory />
    </>
  );
};

export default ShopPage;
