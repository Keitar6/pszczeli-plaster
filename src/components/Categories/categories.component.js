import { useEffect } from "react";

import { CategoryCard } from "./categoriesCards/categoriesCards.component";

import "./categories.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesAsync } from "../../store/categories/category.action";
import { selectCategories } from "../../store/categories/category.selector";
import { Icon } from "@iconify/react";

export const CategoriesHP = () => {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
    console.log(categories);
  }, []);

  return (
    <div className="CategoriesContainer">
      {categories.map((category) => {
        return (
          <CategoryCard key={category.title} category={category}>
            <Icon icon={category.icon} color="#ffb703" width="96" height="96" />
          </CategoryCard>
        );
      }, [])}
    </div>
  );
};
