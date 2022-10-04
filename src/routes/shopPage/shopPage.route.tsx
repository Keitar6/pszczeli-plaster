import { Outlet } from "react-router-dom";
import ShopDirectory from "../../components/shopDirectory/shopDirectory.component";

const ShopPage = () => {
  return (
    <>
      <Outlet />
      <ShopDirectory />
    </>
  );
};

export default ShopPage;
