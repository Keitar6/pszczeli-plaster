import { mockOrder } from "utils/testsMocking/mockOrder";
import { orderCreator } from "./orderCreator.utils";

test("orderCreator Test", () => {

  expect(
    orderCreator(
      mockOrder.id,
      mockOrder.time,
      mockOrder.price,
      mockOrder.itemsBought,
      mockOrder.deliveryData,
      mockOrder.deliveryPrice
    )
  ).toEqual(mockOrder);
});
