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
import Button, {
  BUTTON_TYPE_CLASSES
} from "../../../components/button/button.component";
import { selectIsSortingInView } from "../../../store/generalPropReducer/generalProp.selector";
import { toggleSortingInView } from "../../../store/generalPropReducer/generalProp.actions";

export const ShopSorting = () => {
  const { ascending } = useAppSelector(selectSort);
  const dispatch = useAppDispatch();
  const sortowanie = useAppSelector(selectIsSortingInView);
  console.log(sortowanie);
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
          onClick={() => dispatch(toggleSortingInView())}
        >
          Sortowanie
        </Button>
        {sortowanie ? (
          <>
            <Button
              id="alpha"
              buttonType={BUTTON_TYPE_CLASSES.sorting}
              onClick={sortTypeOnClickHandler}
              data-testid="sortTypeOnClickApha"
            >
              Alphabetyczne
            </Button>
            <Button
              id="price"
              buttonType={BUTTON_TYPE_CLASSES.sorting}
              onClick={sortTypeOnClickHandler}
              data-testid="sortTypeOnClickPrice"
            >
              Według ceny
            </Button>
          </>
        ) : null}
      </SortingTypesList>
      {ascending ? (
        <ShopAscendingIcon
          onClick={() => ascenIconOnClickHandler()}
          data-testid="ascenIconOnClick"
        >
          <Icon icon="bi:arrow-up-circle" width="32" color={Colors.dark} />
        </ShopAscendingIcon>
      ) : (
        <ShopAscendingIcon
          onClick={() => ascenIconOnClickHandler()}
          data-testid="ascenIconOnClick"
        >
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
