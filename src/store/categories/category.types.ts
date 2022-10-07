export type CategoryItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  dodatki?: boolean;
};

export type Category = {
  title: string;
  icon: string;
  items: CategoryItem[];
};

export type CategoryMap = {
  [key: string]: CategoryItem[];
};

export type AllItemsMap = {
  [key: string]: CategoryItem[];
};

export enum CATEGORIES_ACTION_TYPES {
  FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAILED = "FETCH_CATEGORIES_FAILED"
}
