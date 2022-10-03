import { H1 } from "global.styles";
import { FC } from "react";
import { refresh } from "reusableFunctions/refresh.function";
import { alphaSort } from "reusableFunctions/basicSorting.function";

import { selectPath } from "store/generalPropReducer/generalProp.selector";
import { selectCategories } from "../../store/categories/category.selector";
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

const ShopDirectory: FC = () => {
  const categories = useAppSelector(selectCategories);
  const sort = useAppSelector(selectSort);
  const { ascending, sorType } = sort;
  const path = useAppSelector(selectPath);

  function ItemOnClickHandler(categoryPath: string) {
    refresh(categoryPath);
  }

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
          {categories.map((category) => {
            if (category.title === path) {
              const { items } = category;
              const sortedItems = alphaSort(items, sort);

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
          }, {})}
        </ProductCardsContainer>
      </ShopDirectoryContent>
    </ShopDirectoryContainer>
  );
};

export default ShopDirectory;
