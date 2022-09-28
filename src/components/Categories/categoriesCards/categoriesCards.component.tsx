import { FC, PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
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
  const path = title.replace(/\s/g, "");
  const navigate = useNavigate();
  const CategoriesCardOnClickHandler = () => {
    navigate(`/shop/${path}`);
  };

  return (
    <CategoryCardContainer onClick={CategoriesCardOnClickHandler}>
      <CategoryCardIcon>{children}</CategoryCardIcon>
      <CategoryCardTitle>{title}</CategoryCardTitle>
    </CategoryCardContainer>
  );
};
