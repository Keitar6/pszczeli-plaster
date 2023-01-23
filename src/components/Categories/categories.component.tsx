import { CategoryCard } from "./categoriesCards/categoriesCards.component";

import { selectCategories } from "../../store/categories/category.selector";
import { Icon } from "@iconify/react";
import { CategoriesContainer } from "./categories.styles";
import { useAppSelector } from "../../hooks/hooks";

import { AnimatePresence, motion } from "framer-motion";
import { HPCategoriesVariants } from "../../utils/framer-motion/variants.utils";

export const CategoriesHP = () => {
  const categories = useAppSelector(selectCategories);
  return (
    <CategoriesContainer>
      {categories &&
        categories.map((category, index) => {
          return (
            <AnimatePresence key={index} custom={index}>
              <motion.div
                variants={HPCategoriesVariants}
                initial='enter'
                animate="visible"
                exit="exit"
                custom={index}
              >
                <CategoryCard key={category.title} category={category}>
                  <Icon
                    icon={category.icon}
                    color="#ffb703"
                    width="96"
                    height="96"
                  />
                </CategoryCard>
              </motion.div>
            </AnimatePresence>
          );
        }, {})}
    </CategoriesContainer>
  );
};
