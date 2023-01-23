import { ProductCard } from "../../components/productCard/productCard.component";
import { CategoryItem } from "../../store/categories/category.types";
import { Sorting } from "../../utils/reusableFunctions/basicSorting.function";
import { useAppSelector } from "../../hooks/hooks";
import { selectSort } from "../../store/userReducer/user.selector";
import {
  selectAllItemsMap,
  selectCategories
} from "../../store/categories/category.selector";
import {
  selectPath,
  selectViewLimiter
} from "../../store/generalPropReducer/generalProp.selector";
import { ProductCards, ProductCardsContent } from "./productCards.styles";
import { motion } from "framer-motion";
import { ShopMenuProductCardVariants } from "../../utils/framer-motion/variants.utils";
import { viewLimiterInit } from "../../store/generalPropReducer/generalProp.reducer";
export const ProductCardsContainer = () => {
  const categories = useAppSelector(selectCategories);
  const sort = useAppSelector(selectSort);
  const allItemsMap = useAppSelector(selectAllItemsMap);
  const viewLimiter = useAppSelector(selectViewLimiter);
  const path = useAppSelector(selectPath);

  const shopHPSorting = () => {
    const tempItemsMapp = Sorting([...allItemsMap], sort, true);

    return tempItemsMapp.splice(0, viewLimiter);
  };

  const categoriesSorting = (items: CategoryItem[]) => {
    const tempItemsMapp = Sorting([...items], sort, true);
    return tempItemsMapp.splice(0, viewLimiter);
  };

  return (
    <ProductCardsContent>
      <ProductCards>
        {path !== "sklep"
          ? categories.map((category) => {
              if (category.title === path) {
                return categoriesSorting(category.items).map(
                  ({ id, name, image, price }, index: number) => (
                    <motion.div
                      key={id}
                      variants={ShopMenuProductCardVariants}
                      custom={{ viewLimiterInit, viewLimiter, index }}
                      initial="enter"
                      animate="visible"
                      exit="exit"
                    >
                      <ProductCard
                        id={id}
                        name={name}
                        image={image}
                        price={price}
                      />
                    </motion.div>
                  )
                );
              }
            })
          : shopHPSorting().map(({ id, name, image, price }, index: number) => {
              return (
                <motion.div
                  key={id}
                  variants={ShopMenuProductCardVariants}
                  custom={{ viewLimiterInit, viewLimiter, index }}
                  initial="enter"
                  animate="visible"
                  exit="exit"
                >
                  <ProductCard
                    id={id}
                    name={name}
                    image={image}
                    price={price}
                  />
                </motion.div>
              );
            })}
      </ProductCards>
    </ProductCardsContent>
  );
};
