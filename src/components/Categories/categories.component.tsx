import { CategoryCard } from "./categoriesCards/categoriesCards.component";

import { selectCategories } from "../../store/categories/category.selector";
import { Icon } from "@iconify/react";
import { CategoriesContainer } from "./categories.styles";
import { useAppSelector } from "hooks/hooks";

export const CategoriesHP = () => {
  const categories = useAppSelector(selectCategories);

  return (
    <CategoriesContainer>
      {categories.map((category) => {
        return (
          <CategoryCard key={category.title} category={category}>
            <Icon icon={category.icon} color="#ffb703" width="96" height="96" />
          </CategoryCard>
        );
      }, {})}
    </CategoriesContainer>
  );
};
