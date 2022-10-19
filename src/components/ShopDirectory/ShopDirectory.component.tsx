import { H1 } from "../../global.styles";
import { FC, useEffect } from "react";
import { refresh } from "../../utils/reusableFunctions/refresh.function";

import {
  selectPath,
  selectViewLimiter
} from "../../store/generalPropReducer/generalProp.selector";
import {
  selectAllItemsMap,
  selectCategories,
  selectCategoriesMap
} from "../../store/categories/category.selector";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  ShopMenuContainer,
  ShopDirectoryContainer,
  ShopDirectoryContent,
  ShopDirectoryContentHeader,
  ShopMenuItem,
  ShopMenuItems
} from "./shopDirectory.styles";

import { ShopSorting } from "./shopSorting/shopSorting.component";

import {
  incrementViewLimiter,
  resetViewLimiter
} from "../../store/generalPropReducer/generalProp.actions";
import Button, {
  BUTTON_TYPE_CLASSES
} from "../../components/button/button.component";
import { ProductCardsContainer } from "../../components/productCards/productCards.component";
import { setInputSorting } from "../../store/userReducer/user.actions";

const ShopDirectory: FC = () => {
  const categories = useAppSelector(selectCategories);
  const categoriesMap = useAppSelector(selectCategoriesMap);
  const path = useAppSelector(selectPath);
  const allItemsMap = useAppSelector(selectAllItemsMap);
  const viewLimiter = useAppSelector(selectViewLimiter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetViewLimiter());
      dispatch(setInputSorting(""));
    };
  }, [path]);

  const moreProductsHandler = () => {
    dispatch(incrementViewLimiter(viewLimiter, 1));
  };

  const ItemOnClickHandler = (categoryPath: string) => {
    refresh(categoryPath);
  };

  return (
    <ShopDirectoryContainer>
      <ShopMenuContainer>
        <H1>
          <span>Menu</span>
        </H1>

        <ShopMenuItems>
          {categories.map((category) => {
            const { title } = category;
            return (
              <li key={title}>
                <ShopMenuItem
                  to={`/sklep/${title}`}
                  onClick={() => ItemOnClickHandler(`sklep/${title}`)}
                >
                  {title}
                </ShopMenuItem>
              </li>
            );
          }, {})}
        </ShopMenuItems>
      </ShopMenuContainer>
      <ShopDirectoryContent>
        <ShopDirectoryContentHeader>
          <H1>{path}</H1>
          <ShopSorting />
        </ShopDirectoryContentHeader>
        <ProductCardsContainer />

        {path === "sklep"
          ? allItemsMap.length > viewLimiter && (
              <Button
                onClick={moreProductsHandler}
                buttonType={BUTTON_TYPE_CLASSES.base}
              >
                Więcej produktów
              </Button>
            )
          : categoriesMap[path.toLowerCase()].length > viewLimiter && (
              <Button
                onClick={moreProductsHandler}
                buttonType={BUTTON_TYPE_CLASSES.base}
              >
                Więcej produktów
              </Button>
            )}
      </ShopDirectoryContent>
    </ShopDirectoryContainer>
  );
};

export default ShopDirectory;
