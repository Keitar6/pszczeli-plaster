import { FC } from "react";
import { Outlet, useParams } from "react-router-dom";
import { TextLink } from "../../../global.styles";
import { NaviPathText, PathWebPage, ShopInsidePath } from "./NaviPath.style";

export const NaviPath:FC = () => {
  const params = useParams();
  const paths = {
    homePath: `/`,
    shopPath: `shop`,
    path: `/${params.id}`
  };
  const fullPath = Object.values(paths);

  const pathHandler = () => (params.id ? `${paths.path}` : "");

  return (
    <>
      <NaviPathText>
        <PathWebPage to={paths.homePath}>
          <TextLink>{`${paths.homePath}home`}</TextLink>
        </PathWebPage>

        <PathWebPage to={`/${paths.shopPath}`}>
          <TextLink> {`/${paths.shopPath}`} </TextLink>
        </PathWebPage>

        <ShopInsidePath to={fullPath.join("")}>
          <TextLink>{`${pathHandler()}`}</TextLink>
        </ShopInsidePath>
      </NaviPathText>
      <Outlet />
    </>
  );
};
