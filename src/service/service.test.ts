import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { waitFor } from "@testing-library/react";
import {
  categoriesPath,
  orderHistoryPath
} from "../utils/globalRoutes/globalRoutes.utils";
import { postNewOrder, readCategories, readOrderHistory } from "./service";
import { mockCategories } from "../utils/testsMocking/mockCategories";
import { mockOrderHistory } from "../utils/testsMocking/mockOrderHistory";

describe("Service", () => {
  let mock: any;
  beforeAll(() => {
    mock = new MockAdapter(axios);
  });
  jest.mock("axios");

  describe("Categories", () => {
    test("fetch categories - success", async () => {
      mock.onGet(categoriesPath).reply(200, mockCategories);
      const res = await readCategories();
      await waitFor(() => expect(res).toEqual(mockCategories));
    });

    test("fetch categories - error", async () => {
      mock.onGet(categoriesPath).networkError();
      const res = await readCategories();
      await waitFor(() => expect(res).toEqual(undefined));
    });
  });

  describe("Order history", () => {
    test("read order history - success", async () => {
      mock.onGet(orderHistoryPath).reply(200, mockOrderHistory);
      const res = await readOrderHistory();
      await waitFor(() => expect(res).toEqual(mockOrderHistory));
    });

    test("read order history - failed", async () => {
      mock.onGet(orderHistoryPath).networkError();
      const res = await readCategories();
      await waitFor(() => expect(res).toEqual(undefined));
    });

    test("post order history - success", async () => {
      mock.onPost(orderHistoryPath).reply(200, mockOrderHistory[1]);
      const res = await postNewOrder(mockOrderHistory[1]);
      await waitFor(() => expect(res).toEqual(mockOrderHistory[1]));
    });

    test("post order history - failed", async () => {
      mock.onPost(orderHistoryPath).networkError();
      const res = await postNewOrder(mockOrderHistory[1]);
      await waitFor(() => expect(res).toEqual(undefined));
    });
  });
});
