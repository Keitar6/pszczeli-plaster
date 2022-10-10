import { FC, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { refresh } from "utils/reusableFunctions/refresh.function";
import { setPath } from "store/generalPropReducer/generalProp.actions";
import { useAppDispatch } from "hooks/hooks";
import { TextLink } from "../../../global.styles";
import { NaviPathText, PathWebPage, ShopInsidePath } from "./naviPath.style";

export const NaviPath: FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const paths = {
    homePath: ``,
    shopPath: `sklep`,
    path: `${params.id}`
  };
  const fullPath = Object.values(paths);
  const pathHandler = () => (params.id ? `${paths.path}` : "");

  const refresHandler = (path: string) => {
    refresh(path);
  };

  useEffect(() => {
    if (params.id && params.id != "/undefined") dispatch(setPath(params.id));
    else dispatch(setPath("sklep"));
  }, [params]);

  return (
    <>
      <NaviPathText>
        <PathWebPage to={paths.homePath}>
          <TextLink>{`${String("strona główna").toUpperCase()}`}</TextLink>
        </PathWebPage>

        <PathWebPage
          to={`/${paths.shopPath}`}
          onClick={() => refresHandler(paths.shopPath)}
        >
          <TextLink> {`${String(paths.shopPath).toUpperCase()}`} </TextLink>
        </PathWebPage>

        <ShopInsidePath
          to={fullPath.join("/")}
          onClick={() => refresHandler(`${paths.shopPath}${paths.path}`)}
        >
          <TextLink>{`${pathHandler().toUpperCase()}`}</TextLink>
        </ShopInsidePath>
      </NaviPathText>
      <Outlet />
    </>
  );
};
