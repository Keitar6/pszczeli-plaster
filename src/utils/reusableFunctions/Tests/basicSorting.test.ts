import { debuggerStatement } from "@babel/types";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { CategoryItem } from "store/categories/category.types";
import { SortType } from "store/userReducer/user.reducer";
import { Sorting } from "../basicSorting.function";

// Input (items: CategoryItem[], sort: SortType)

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
        name: "DMock",
        weight: 15,
        price: 400,
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
        name: "BMock",
        weight: 15,
        price: 200,
        image: "ImageSciezkaMock",
        dodatki: false
      },
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
        name: "DMock",
        weight: 15,
        price: 400,
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
        name: "BMock",
        weight: 15,
        price: 200,
        image: "ImageSciezkaMock",
        dodatki: false
      },
      {
        id: "IDmock",
        name: "AMock",
        weight: 15,
        price: 100,
        image: "ImageSciezkaMock",
        dodatki: false
      }
    ],
    mock4: [
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
    ]
  };

  type mockSortType = {
    [key: string]: SortType;
  };

  const mockSortType: mockSortType = {
    mock1: {
      sorType: "alphabetic",
      inputSort: "",
      ascending: false
    },
    mock2: {
      sorType: "alphabetic",
      inputSort: "",
      ascending: true
    },
    mock3: {
      sorType: "price",
      inputSort: "",
      ascending: false
    },
    mock4: {
      sorType: "price",
      inputSort: "",
      ascending: true
    }
  };
  // type MockFunctionType = (a: CategoryItem, b: CategoryItem) => boolean;
  test("Basic Sorting", () => {
    expect.assertions(4);

    expect(Sorting(mockItems, mockSortType.mock1)).toEqual(
      mockItemsReturn.mock1
    );
    expect(Sorting(mockItems, mockSortType.mock2)).toEqual(
      mockItemsReturn.mock2
    );
    expect(Sorting(mockItems, mockSortType.mock3)).toEqual(
      mockItemsReturn.mock3
    );
    expect(Sorting(mockItems, mockSortType.mock4)).toEqual(
      mockItemsReturn.mock4
    );
  });
});
