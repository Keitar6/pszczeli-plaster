import { H1 } from "global.styles";
import { FC } from "react";
import { refresh } from "reusableFunctions/refresh.function";
import { Sorting } from "reusableFunctions/basicSorting.function";

import { selectPath } from "store/generalPropReducer/generalProp.selector";
import {
  selectCategories,
  selectCategoriesMap
} from "../../store/categories/category.selector";
import { useAppSelector } from "../../types/hooks/hooks";
import { ProductCard } from "../productCard/productCard.component";

import {
  ShopMenuContainer,
  ShopDirectoryContainer,
  ShopDirectoryContent,
  ProductCardsContainer,
  ShopDirectoryContentHeader,
  ShopMenuItem,
  ShopMenuItems

} from "./shopDirectory.styles";

import { selectSort } from "store/userReducer/user.selector";
import { ShopSorting } from "./shopSorting/shopSorting.component";
import { CategoryItem } from "store/categories/category.types";
import { inputSorting } from "reusableFunctions/sortingWithInput.function";

const ShopDirectory: FC = () => {
  const categories = useAppSelector(selectCategories);
  const sort = useAppSelector(selectSort);
  const path = useAppSelector(selectPath);
  const categoriesMap = useAppSelector(selectCategoriesMap);

  const ItemOnClickHandler = (categoryPath: string) => {
    refresh(categoryPath);
  };

  const shopHPSorting = () => {
    const tempAllItems: CategoryItem[] = [];
    Object.values(categoriesMap).map((value) => {
      tempAllItems.push(...value);
    }, []);
    return inputSorting(tempAllItems, sort, true);
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
                  to={`/shop/${title}`}
                  onClick={() => ItemOnClickHandler(`shop/${title}`)}
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

        <ProductCardsContainer>
          {path !== "shop"
            ? categories.map((category) => {
                let sortedItems: CategoryItem[] = [];
                const { items } = category;
                if (category.title === path) {
                  sortedItems = Sorting(items, sort);
                  return sortedItems.map(
                    ({ id, name, image, price }) => (
                      <ProductCard
                        key={id}
                        id={id}
                        name={name}
                        image={image}
                        price={price}
                      />
                    ),
                    {}
                  );
                }
              }, {})
            : shopHPSorting().map(({ id, name, image, price }) => {
                return (
                  <ProductCard
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    price={price}
                  />
                );
              }, {})}
        </ProductCardsContainer>
      </ShopDirectoryContent>
    </ShopDirectoryContainer>
  );
};

export default ShopDirectory;
