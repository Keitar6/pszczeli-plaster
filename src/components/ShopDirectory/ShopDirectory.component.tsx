import { FC } from "react";
import { selectCategories } from "../../store/categories/category.selector";
import { useAppSelector } from "../../types/hooks/hooks";
import { ProductCard } from "../productCard/productCard.component";
import {
  ShopMenu,
  ShopDirectoryContainer,
  ShopDirectoryContent
} from "./ShopDirectory.styles";

const ShopDirectory: FC = () => {
  const categories = useAppSelector(selectCategories);
  console.log(categories);

  return (
    <ShopDirectoryContainer>
      <ShopMenu>Menu</ShopMenu>
      <ShopDirectoryContent>
        Product View
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
      </ShopDirectoryContent>
    </ShopDirectoryContainer>
  );
};

export default ShopDirectory;
