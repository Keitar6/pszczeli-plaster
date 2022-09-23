import React from "react";
import { Outlet } from "react-router-dom";
import { Directory } from "../../components/directory/directory.component";
const HomePage = () => {
  return (
    <div className="HomePage">
      <Outlet />
      <Directory />
    </div>
  );
};
export default HomePage;
