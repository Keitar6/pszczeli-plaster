import { CategoryItem } from "../../../store/categories/category.types";
import { SortType } from "../../../store/userReducer/user.reducer";
import { Sorting } from "../basicSorting.function";

describe("Reusable Functions --> Basic sorting", () => {
  type MockItems = {
    [key: string]: CategoryItem[];
  };

  const mockItems: CategoryItem[] = [
    {
      id: "IDmock",
      name: "AMock",
      weight: 15,
      price: 100,
      image: "ImageSciezkaMock",
      dodatki: false
    },
    {
      id: "IDmock",
      name: "BMock",
      weight: 15,
      price: 200,
      image: "ImageSciezkaMock",
      dodatki: false
    },
    {
      id: "IDmock",
      name: "CMock",
      weight: 15,
      price: 300,
      image: "ImageSciezkaMock",
      dodatki: false
    },
    {
      id: "IDmock",
      name: "DMock",
      weight: 15,
      price: 400,
      image: "ImageSciezkaMock",
      dodatki: false
    }
  ];

  const mockItemsReturn: MockItems = {
    mock1: [
      {
        id: "IDmock",
        name: "AMock",
        weight: 15,
        price: 100,
        image: "ImageSciezkaMock",
        dodatki: false
      }
    ],
    mock2: [
      {
        id: "IDmock",
        name: "AMock",
        weight: 15,
        price: 100,
        image: "ImageSciezkaMock",
        dodatki: false
      },
      {
        id: "IDmock",
        name: "BMock",
        weight: 15,
        price: 200,
        image: "ImageSciezkaMock",
        dodatki: false
      },
      {
        id: "IDmock",
        name: "CMock",
        weight: 15,
        price: 300,
        image: "ImageSciezkaMock",
        dodatki: false
      },
      {
        id: "IDmock",
        name: "DMock",
        weight: 15,
        price: 400,
        image: "ImageSciezkaMock",
        dodatki: false
      }
    ],
    mock3: [
      {
        id: "IDmock",
        name: "CMock",
        weight: 15,
        price: 300,
        image: "ImageSciezkaMock",
        dodatki: false
      }
    ],
    mock4: [
      {
        id: "IDmock",
        name: "DMock",
        weight: 15,
        price: 400,
        image: "ImageSciezkaMock",
        dodatki: false
      }
    ]
  };

  type mockSortType = {
    [key: string]: SortType;
  };

  const mockSortType: mockSortType = {
    mock1: {
      sorType: "alphabetic",
      inputSort: "AMock",
      ascending: false
    },
    mock2: {
      sorType: "alphabetic",
      inputSort: "Mock",
      ascending: true
    },
    mock3: {
      sorType: "price",
      inputSort: "CMock",
      ascending: false
    },
    mock4: {
      sorType: "price",
      inputSort: "DMock",
      ascending: true
    }
  };

  test("Basic Sorting", () => {

    expect(Sorting(mockItems, mockSortType.mock1, true)).toEqual(
      mockItemsReturn.mock1
    );
    expect(Sorting(mockItems, mockSortType.mock2, true)).toEqual(
      mockItemsReturn.mock2
    );
    expect(Sorting(mockItems, mockSortType.mock3, true)).toEqual(
      mockItemsReturn.mock3
    );
    expect(Sorting(mockItems, mockSortType.mock4, true)).toEqual(
      mockItemsReturn.mock4
    );
  });
});
