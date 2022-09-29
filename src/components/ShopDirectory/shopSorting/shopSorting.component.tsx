import { useAppDispatch, useAppSelector } from "types/hooks/hooks";
import { Icon } from "@iconify/react";

import { Colors } from "global.styles";
import { selectSort } from "store/userReducer/user.selector";
import { ProductsSorting, ShopAscendingIcon } from "./shopSorting.styles";
import { toggleSortingAscending } from "store/userReducer/user.actions";

export const ShopSorting = () => {
  const { ascending } = useAppSelector(selectSort);
  const dispatch = useAppDispatch();

  const ascenIconOnClickHandler = () => {
    dispatch(toggleSortingAscending());
  };
  return (
    <ProductsSorting>
      Sorting
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
