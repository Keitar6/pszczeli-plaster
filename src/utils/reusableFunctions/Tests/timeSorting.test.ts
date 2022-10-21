import { Order } from "../../../store/orderHistory/orderHistory.types";
import { timeSorting } from "../timeSorting.function";

describe("Reusable Functions --> Time sorting", () => {
  const mockOrderArray1: Order[] = [
    {
      id: "mockID",
      time: "3/9/2022 @ 10:40:00",
      price: 10,
      itemsBought: [],
      deliveryData: {},
      deliveryPrice: 9
    },
    {
      id: "mockID",
      time: "3/9/2022 @ 10:50:00",
      price: 10,
      itemsBought: [],
      deliveryData: {},
      deliveryPrice: 9
    },
    {
      id: "mockID",
      time: "4/9/2022 @ 10:30:00",
      price: 10,
      itemsBought: [],
      deliveryData: {},
      deliveryPrice: 9
    }
  ];
  const mockOrderArrayReturn1: Order[] = [
    {
      id: "mockID",
      time: "4/9/2022 @ 10:30:00",
      price: 10,
      itemsBought: [],
      deliveryData: {},
      deliveryPrice: 9
    },
    {
      id: "mockID",
      time: "3/9/2022 @ 10:50:00",
      price: 10,
      itemsBought: [],
      deliveryData: {},
      deliveryPrice: 9
    },
    {
      id: "mockID",
      time: "3/9/2022 @ 10:40:00",
      price: 10,
      itemsBought: [],
      deliveryData: {},
      deliveryPrice: 9
    }
  ];

  test("Time Sorting", () => {
    expect.assertions(1);
    expect(timeSorting(mockOrderArray1)).toEqual(mockOrderArrayReturn1);
  });
});
