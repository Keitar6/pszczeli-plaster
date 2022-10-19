import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { Icon } from "@iconify/react";

import { Colors } from "../../../global.styles";
import { selectSort } from "../../../store/userReducer/user.selector";
import {
  ProductsSorting,
  ShopAscendingIcon,
  SortingTypesList
} from "./shopSorting.styles";
import {
  setAlphabeticSorting,
  setPriceSorting,
  toggleSortingAscending
} from "../../../store/userReducer/user.actions";
import { useState } from "react";
import Button, {
  BUTTON_TYPE_CLASSES
} from "../../../components/button/button.component";

export const ShopSorting = () => {
  const { ascending } = useAppSelector(selectSort);
  const dispatch = useAppDispatch();
  const [sortowanie, setSortowanie] = useState(false);

  const ascenIconOnClickHandler = () => {
    dispatch(toggleSortingAscending());
  };

  const sortTypeOnClickHandler = (event: any) => {
    if (event.target.id === "price") dispatch(setPriceSorting());
    else if (event.target.id === "alpha") dispatch(setAlphabeticSorting());
  };

  return (
    <ProductsSorting>
      <SortingTypesList id="SortingTypes">
        <Button
          buttonType={BUTTON_TYPE_CLASSES.sorting}
          onClick={() => setSortowanie(!sortowanie)}
        >
          Sortowanie
        </Button>
        {sortowanie ? (
          <>
            <Button
              id="alpha"
              buttonType={BUTTON_TYPE_CLASSES.sorting}
              onClick={sortTypeOnClickHandler}
            >
              Alphabetyczne
            </Button>
            <Button
              id="price"
              buttonType={BUTTON_TYPE_CLASSES.sorting}
              onClick={sortTypeOnClickHandler}
            >
              Według ceny
            </Button>
          </>
        ) : null}
      </SortingTypesList>
      {ascending ? (
        <ShopAscendingIcon onClick={() => ascenIconOnClickHandler()}>
          <Icon icon="bi:arrow-up-circle" width="32" color={Colors.dark} />
        </ShopAscendingIcon>
      ) : (
        <ShopAscendingIcon onClick={() => ascenIconOnClickHandler()}>
          <Icon
            icon="bi:arrow-up-circle"
            width="32"
            rotate={2}
            color={Colors.dark}
          />
        </ShopAscendingIcon>
      )}
    </ProductsSorting>
  );
};
