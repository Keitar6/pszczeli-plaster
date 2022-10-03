import { CategoryItem } from "store/categories/category.types";

export const comparingUP = (a: CategoryItem, b: CategoryItem) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
};

export const comparingDOWN = (a: CategoryItem, b: CategoryItem) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA > nameB) {
    return -1;
  }
  if (nameA < nameB) {
    return 1;
  }

  // names must be equal
  return 0;
};

export const alphaSort = (items: CategoryItem[], isAscending?: boolean) => {
  items.sort((a, b) => {
    if (isAscending) return comparingUP(a, b);
    else return comparingDOWN(a, b);
  });

  return items;
};
