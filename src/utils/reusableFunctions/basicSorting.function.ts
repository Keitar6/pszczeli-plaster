import { CategoryItem } from "../../store/categories/category.types";
import { SortType, SORTING_TYPES } from "../../store/userReducer/user.reducer";

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

export const Sorting = (
  items: CategoryItem[],
  sortType: SortType,
  ifInputSort = false
) => {
  const { ascending, sorType } = sortType;
  let sortedArray = items;

  sortedArray.sort((a, b) => {
    if (ascending) return comparingUP(a, b, sorType as string);
    else return comparingDOWN(a, b, sorType as string);
  });

  if (ifInputSort && sortType.inputSort !== "")
    sortedArray = sortedArray.filter((a) => {
      return a.name.includes(sortType.inputSort) ? 1 : 0;
    });

  return sortedArray;
};
