import { CategoryItem } from "../../store/categories/category.types";

export const mockCartItemInArray: CategoryItem & { quantity: number } = {
  id: "ajdi",
  name: "name",
  weight: 205,
  price: 13,
  image: "yes",
  dodatki: false,
  quantity: 2
};

export const mockCartItemInArray1Quantity: CategoryItem & { quantity: number } =
  {
    id: "ajdi",
    name: "name",
    weight: 205,
    price: 13,
    image: "yes",
    dodatki: false,
    quantity: 1
  };

export const mockCartItemNotInArray: CategoryItem & { quantity: number } = {
  id: "ajdi",
  name: "name",
  weight: 205,
  price: 13,
  image: "yes",
  dodatki: false,
  quantity: 0
};

export const mockCartItems = [
  {
    id: "FajneID",
    name: "SuperName",
    weight: 15,
    price: 165,
    image: "ImageSciezka",
    dodatki: false,
    quantity: 2
  },
];

export const mockCartItems2 = [
  {
    id: "FajneID",
    name: "SuperName",
    weight: 15,
    price: 165,
    image: "ImageSciezka",
    dodatki: false,
    quantity: 2
  },
  {
    id: "AjneID",
    name: "UperName",
    weight: 14,
    price: 42,
    image: "ImageSciezka",
    dodatki: false,
    quantity: 1
  }
];