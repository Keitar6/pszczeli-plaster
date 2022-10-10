import { ProductCard } from "components/productCard/productCard.component";
import { CategoryItem } from "store/categories/category.types";
import { inputSorting } from "utils/reusableFunctions/sortingWithInput.function";
import { Sorting } from "utils/reusableFunctions/basicSorting.function";
import { useAppSelector } from "hooks/hooks";
import { selectSort } from "store/userReducer/user.selector";
import {
  selectAllItemsMap,
  selectCategories
} from "store/categories/category.selector";
import {
  selectPath,
  selectViewLimiter
} from "store/generalPropReducer/generalProp.selector";
import { ProductCards, ProductCardsContent } from "./productCards.styles";
import { useEffect } from "react";

export const ProductCardsContainer = () => {
  const categories = useAppSelector(selectCategories);
  const sort = useAppSelector(selectSort);
  const allItemsMap = useAppSelector(selectAllItemsMap);
  const viewLimiter = useAppSelector(selectViewLimiter);
  const path = useAppSelector(selectPath);

  const shopHPSorting = () => {
    const tempItemsMapp = [...allItemsMap];
    return inputSorting(tempItemsMapp.splice(0, viewLimiter), sort, true);
  };

  const categoriesSorting = (items: CategoryItem[]) => {
    const tempItemsMapp = [...items];
    return Sorting(tempItemsMapp.splice(0, viewLimiter), sort);
  };

  // useEffect(() => {
  //   // console.log("Categories:", categories);
  //   // console.log("AllItemsMap: ", allItemsMap);
  //   // console.log("ShopSorting:", shopHPSorting());
  //   // console.log("Path:", path);
  // }, []);

  return (
    <ProductCardsContent>
      <ProductCards>
        {path !== "sklep"
          ? categories.map((category) => {
              if (category.title === path) {
                return categoriesSorting(category.items).map(
                  ({ id, name, image, price }) => (
                    <ProductCard
                      key={id}
                      id={id}
                      name={name}
                      image={image}
                      price={price}
                    />
                  )
                );
              }
            })
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
            })}
      </ProductCards>
    </ProductCardsContent>
  );
};
