import axios from "axios";
import { Order } from "store/orderHistory/orderHistory.types";

import { categoriesPath, orderHistoryPath } from "utils/globalRoutes/globalRoutes.utils";

export const createCategories = async (category:string) => {
  const url = `http://localhost:3000/categories`;
  try {
    await axios
      .post(url, category, {
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then((response) => {
        //   console.log(response);
        console.log(response.data);
      });
  } catch (error) {
    throw new Error(`Pojawił się problem przy tworzeniu elementu: ${error}`);
  }
};

export const postNewOrder = async (order:Order) => {
  const url = `${orderHistoryPath}`;

  try {
    await axios
      .post(url, order, {
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then((response) => {
        //   console.log(response);
        console.log(response.data);
      });
  } catch (error) {
    throw new Error(`Pojawił się problem przy tworzeniu elementu: ${error}`);
  }
};

export const readOrderHistory = async () => {
  const url = `${orderHistoryPath}`;
  
  try {
    const data = await axios.get(url).then((response) => {
      return response.data;
    });
    console.log(data)
    return data;
  } catch (error) {
    throw new Error(
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
    throw new Error(
      `Pojawił się problem przy czytaniu elementu z Categories: ${error}`
    );
  }
};

export const updateCategories = async (category:string) => {
  const url = `http://localhost:3000/${category}`;
  try {
    await axios.put(url).then((response) => {
      console.log(response.data);
    });
  } catch (error) {
    throw new Error(
      `Pojawił się problem przy aktualizacji elementu(${category}): ${error}`
    );
  }
};

export const deleteCategories = async (category:string) => {
  const url = `http://localhost:3000/categories/${category}`;
  try {
    const dane = await axios.delete(url).then((response) => {
      console.log(response.data);
      return response.data;
    });
    return dane;
  } catch (error) {
    throw new Error(
      `Pojawił się problem przy usuwaniu elementu(${category}): ${error}`
    );
  }
};