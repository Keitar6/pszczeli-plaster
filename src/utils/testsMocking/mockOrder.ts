export const mockCartItems = [
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

export const deliveryData = {
  dobryDelivery: "bardzoDobryDelivery"
};

export const mockOrder = {
  id: "adgadg",
  time: "adgadg",
  price: 123,
  itemsBought: mockCartItems,
  deliveryData: deliveryData,
  deliveryPrice: 15
};
