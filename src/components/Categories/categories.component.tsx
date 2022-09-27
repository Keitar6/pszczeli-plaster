import { CategoryCard } from "./categoriesCards/categoriesCards.component";

import { useSelector } from "react-redux";

import { selectCategories } from "../../store/categories/category.selector";
import { Icon } from "@iconify/react";
import { CategoriesContainer } from "./categories.styles";

export const CategoriesHP = () => {
  const categories = useSelector(selectCategories);

  
  return (

    <CategoriesContainer>
      {categories.map((category) => {
        return (
          <CategoryCard key={category.title} category={category}>
            <Icon icon={category.icon} color="#ffb703" width="96" height="96" />
          </CategoryCard>
        );
      }, [])}
    </CategoriesContainer>
  );
};
