export const mockOrder =  {
  id: "FodcJ1x2",
  time: "2/9/2022 @ 9:25:41",
  price: 12,
  itemsBought: [],
  deliveryData: {
    terms: true,
    name: "Tomasz",
    lastName: "Klusek",
    email: "klusekTomasz@gmail.com",
    street: "Nie, blok",
    homeAdress: "posiada",
    city: "Yrtaln",
    zip: "51-143",
    deliveryMethod: "Poczta Polska",
    payMethod: "paymentOptions.blik"
  },
  deliveryPrice: 12
}
export const mockOrderHistory = [
  {
    id: "FodcJ1x2",
    time: "2/9/2022 @ 9:25:41",
    price: 12,
    itemsBought: [],
    deliveryData: {
      terms: true,
      name: "Mateusz",
      lastName: "Statkiewicz",
      email: "mateusz.statkiewicz2@gmail.com",
      street: "Rynek, 13/3",
      homeAdress: "ee",
      city: "Strzelin",
      zip: "57-100",
      deliveryMethod: "Poczta Polska",
      payMethod: "paymentOptions.blik"
    },
    deliveryPrice: 12
  },
  {
    id: "EkT4ppwW",
    time: "2/9/2022 @ 11:1:17",
    price: 60,
    itemsBought: [
      {
        id: "002M",
        image: "Miody/rzepak.jpg",
        name: "Miód rzepakowy",
        price: 24,
        quantity: 1
      },
      {
        id: "001M",
        image: "Miody/lipa.jpg",
        name: "Miód lipowy",
        price: 25,
        quantity: 1
      }
    ],
    deliveryData: {
      terms: true,
      name: "Mateusz",
      lastName: "Statkiewicz",
      email: "mateusz.statkiewicz@capgemini.com",
      street: "Rynek, 13/3",
      homeAdress: "13",
      city: "Strzelin",
      zip: "57-100",
      deliveryMethod: "Kurier Inpost",
      payMethod: "[object Object]"
    },
    deliveryPrice: 11
  },
  {
    id: "R4hv9SpM",
    time: "2/9/2022 @ 11:7:48",
    price: 119,
    itemsBought: [
      {
        id: "001PP",
        image: "ProduktyPszczele/PylekPszczeli.jpg",
        name: "Pyłek pszczeli",
        price: 48,
        quantity: 1
      },
      {
        id: "001MP",
        image: "MiodyPitne/rogDoMiodu.jpg",
        name: "Miód pitny trójniak",
        price: 35,
        quantity: 1
      },
      {
        id: "001M",
        image: "Miody/lipa.jpg",
        name: "Miód lipowy",
        price: 25,
        quantity: 1
      }
    ],
    deliveryData: {
      terms: true,
      name: "Mateusz",
      lastName: "Statkiewicz",
      email: "mankiety0@gmail.com",
      street: "Rynek, 13/3",
      homeAdress: "e",
      city: "Strzelin",
      zip: "57-100",
      deliveryMethod: "Kurier Inpost",
      payMethod: "Blik"
    },
    deliveryPrice: 11
  }
];
