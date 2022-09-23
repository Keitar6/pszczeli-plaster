import { FC, PropsWithChildren } from "react";
import { Category } from "../../../store/categories/category.types";
import {
  CategoryCardIcon,
  CategoryCardTitle,
  CategoryCardContainer
} from "./categoriesCards.styles";

type CategoryCardProps = {
  category: Category;
};

export const CategoryCard: FC<PropsWithChildren<CategoryCardProps>> = ({
  category,
  children
}) => {
  const { title } = category;
  return (
    <CategoryCardContainer>
      <CategoryCardIcon>{children}</CategoryCardIcon>
      <CategoryCardTitle>{title}</CategoryCardTitle>
    </CategoryCardContainer>
  );
};
