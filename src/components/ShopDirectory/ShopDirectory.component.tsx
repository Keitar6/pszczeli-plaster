import { H1 } from "global.styles";
import { FC } from "react";
import { refresh } from "reusableFunctions/refresh.function";
import { selectPath } from "store/generalPropReducer/generalProp.selector";
import { selectCategories } from "../../store/categories/category.selector";
import { useAppSelector } from "../../types/hooks/hooks";
import { ProductCard } from "../productCard/productCard.component";
import {
  ShopMenuContainer,
  ShopDirectoryContainer,
  ShopDirectoryContent,
  ProductCardsContainer,
  ProductsSorting,
  ShopDirectoryContentHeader,
  ShopMenuItem,
  ShopMenuItems
} from "./shopDirectory.styles";

const ShopDirectory: FC = () => {
  const categories = useAppSelector(selectCategories);
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
          <ProductsSorting>Sorting</ProductsSorting>
        </ShopDirectoryContentHeader>

        <ProductCardsContainer>
          {categories.map(({ items }) => {
            return items.map(
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
          }, {})}
        </ProductCardsContainer>
      </ShopDirectoryContent>
    </ShopDirectoryContainer>
  );
};

export default ShopDirectory;
