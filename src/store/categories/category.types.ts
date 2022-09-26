export type CategoryItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export type Category = {
  title: string;
  icon: string;
  items: CategoryItem[];
};

export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED = "FETCH_CATEGORIES_FAILED",
}
