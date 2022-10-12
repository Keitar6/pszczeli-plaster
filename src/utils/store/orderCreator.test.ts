import { orderCreator } from "./orderCreator.utils";

const mockItemsBought = [
  {
    id: "FajneID",
    name: "SuperName",
    weight: 15,
    price: 165,
    image: "ImageSciezka",
    dodatki: false,
    quantity: 2
  }
];

const deliveryData = {
  dobryDelivery: "bardzoDobryDelivery"
};

const mockData = {
  id: "adgadg",
  time: "adgadg",
  price: 123,
  itemsBought: mockItemsBought,
  deliveryData: deliveryData,
  deliveryPrice: 15
};

const mockDataReturn1 = {
  id: "adgadg",
  time: "adgadg",
  price: 123,
  itemsBought: mockItemsBought,
  deliveryData: deliveryData,
  deliveryPrice: 15
};

test("orderCreator Test", () => {
  expect.assertions(1);
  expect(
    orderCreator(
      mockData.id,
      mockData.time,
      mockData.price,
      mockData.itemsBought,
      mockData.deliveryData,
      mockData.deliveryPrice
    )
  ).toEqual(mockDataReturn1);
});
