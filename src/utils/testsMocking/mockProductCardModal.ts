import { ProductCardModal } from "store/generalPropReducer/generalProp.reducer";
import { mockCategories } from "./mockCategories";

export const mockProductCardModalClosed:ProductCardModal={
    isProductCardOpened: false,
    currentProductCard: mockCategories[1].items[1],
}

export const mockProductCardModalOpened:ProductCardModal={
    isProductCardOpened: true,
    currentProductCard: mockCategories[1].items[1],
}