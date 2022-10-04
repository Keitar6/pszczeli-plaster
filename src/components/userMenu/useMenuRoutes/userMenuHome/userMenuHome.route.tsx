import { UserMenuDirectory } from "components/userMenu/userMenuDirectory/userMenuDirectory.component";
import { Outlet } from "react-router-dom";

export const UserMenuHomePage = () => {

  return (
    <>
      <Outlet />
      <UserMenuDirectory />
    </>
  );
};

