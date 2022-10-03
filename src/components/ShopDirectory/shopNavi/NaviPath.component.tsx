import { FC, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { refresh } from "reusableFunctions/refresh.function";
import { setPath } from "store/generalPropReducer/generalProp.actions";
import { useAppDispatch } from "types/hooks/hooks";
import { TextLink } from "../../../global.styles";
import { NaviPathText, PathWebPage, ShopInsidePath } from "./naviPath.style";

export const NaviPath: FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const paths = {
    homePath: `/`,
    shopPath: `shop`,
    path: `/${params.id}`
  };
  const fullPath = Object.values(paths);
  const pathHandler = () => (params.id ? `${paths.path}` : "");

  const refresHandler = (path: string) => {
    refresh(path);
  };

  useEffect(() => {
    if (params.id && params.id != "/undefined") dispatch(setPath(params.id));
    else dispatch(setPath("shop"));
  }, [params]);

  return (
    <>
      <NaviPathText>
        <PathWebPage to={paths.homePath}>
          <TextLink>{`${paths.homePath}home`}</TextLink>
        </PathWebPage>

        <PathWebPage
          to={`/${paths.shopPath}`}
          onClick={() => refresHandler(paths.shopPath)}
        >
          <TextLink> {`/${paths.shopPath}`} </TextLink>
        </PathWebPage>

        <ShopInsidePath
          to={fullPath.join("")}
          onClick={() => refresHandler(`${paths.shopPath}${paths.path}`)}
        >
          <TextLink>{`${pathHandler()}`}</TextLink>
        </ShopInsidePath>
      </NaviPathText>
      <Outlet />
    </>
  );
};
