import { CategoryItem } from "store/categories/category.types";
import { SortType, SORTING_TYPES } from "store/userReducer/user.reducer";

export const comparingUP = (
  a: CategoryItem,
  b: CategoryItem,
  sortType: string
) => {
  let firstItem: string | number = "";
  let secondItem: string | number = "";

  if (sortType === SORTING_TYPES.ALPHABETIC) {
    firstItem = a.name.toUpperCase();
    secondItem = b.name.toUpperCase();
  } else if (sortType === SORTING_TYPES.PRICE) {
    firstItem = a.price;
    secondItem = b.price;
  }

  if (firstItem < secondItem) {
    return -1;
  }
  if (firstItem > secondItem) {
    return 1;
  }

  return 0;
};

export const comparingDOWN = (
  a: CategoryItem,
  b: CategoryItem,
  sortType: string
) => {
  let firstItem: string | number = "";
  let secondItem: string | number = "";

  if (sortType === SORTING_TYPES.ALPHABETIC) {
    firstItem = a.name.toUpperCase();
    secondItem = b.name.toUpperCase();
  } else if (sortType === SORTING_TYPES.PRICE) {
    firstItem = a.price;
    secondItem = b.price;
  }

  if (firstItem > secondItem) {
    return -1;
  }
  if (firstItem < secondItem) {
    return 1;
  }

  return 0;
};

export const Sorting = (items: CategoryItem[], sort: SortType) => {
  const { ascending, sorType } = sort;

  items.sort((a, b) => {
    if (ascending) return comparingUP(a, b, sorType as string);
    else return comparingDOWN(a, b, sorType as string);
  });

  
  return items;
};
