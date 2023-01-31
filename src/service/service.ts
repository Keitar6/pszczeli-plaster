import axios from "axios";
import { Order } from "../store/orderHistory/orderHistory.types";

import {
  categoriesPath,
  orderHistoryPath
} from "../utils/globalRoutes/globalRoutes.utils";

export const postNewOrder = async (order: Order) => {
  const url = `${orderHistoryPath}`;

  const options = {
    url: url,
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8"
    },

    data: order
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.log(
      `Pojawił się problem przy postowaniu elementu (${order}): ${error}`
    );
  }
};

export const readOrderHistory = async () => {
  const url = `${orderHistoryPath}`;

  try {
    const data = await axios.get(url).then((response) => {
      return response.data;
    });
    return data;
  } catch (error) {
    console.log(
      `Pojawił się problem przy czytaniu elementu z OrderHistory: ${error}`
    );
  }
};

export const readCategories = async () => {
  const url = `${categoriesPath}`;

  try {
    const data = await axios.get(url).then((response) => {
      return response.data;
    });
    return data;
  } catch (error) {
    console.log(
      `Pojawił się problem przy czytaniu elementu z Categories: ${error}`
    );
  }
};
