import { CategoryItem } from "../../../store/categories/category.types";
import { SortType } from "../../../store/userReducer/user.reducer";
import { Sorting } from "../basicSorting.function";

describe("Reusable Functions --> Basic sorting", () => {
  type MockItems = {
    [key: string]: CategoryItem[];
  };

  const mockCategoryItemsArray: CategoryItem[] = [
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
      inputSort: "AMock",
      ascending: false
    },
    mock2: {
      sorType: "alphabetic",
      inputSort: "BMock",
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
  // type MockFunctionType = (a: CategoryItem, b: CategoryItem) => boolean;
  test("Basic Sorting", () => {
    expect.assertions(4);

    expect(Sorting(mockCategoryItemsArray, mockSortType.mock1)).toEqual(
      mockItemsReturn.mock1
    );
    expect(Sorting(mockCategoryItemsArray, mockSortType.mock2)).toEqual(
      mockItemsReturn.mock2
    );
    expect(Sorting(mockCategoryItemsArray, mockSortType.mock3)).toEqual(
      mockItemsReturn.mock3
    );
    expect(Sorting(mockCategoryItemsArray, mockSortType.mock4)).toEqual(
      mockItemsReturn.mock4
    );
  });

  const mockItemsReturnWithInput: MockItems = {
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
        name: "BMock",
        weight: 15,
        price: 200,
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
  test("Input Sorting", () => {
    expect.assertions(4);

    expect(Sorting(mockCategoryItemsArray, mockSortType.mock1, true)).toEqual(
      mockItemsReturnWithInput.mock1
    );
    expect(Sorting(mockCategoryItemsArray, mockSortType.mock2, true)).toEqual(
      mockItemsReturnWithInput.mock2
    );
    expect(Sorting(mockCategoryItemsArray, mockSortType.mock3, true)).toEqual(
      mockItemsReturnWithInput.mock3
    );
    expect(Sorting(mockCategoryItemsArray, mockSortType.mock4, true)).toEqual(
      mockItemsReturnWithInput.mock4
    );
  });
});
