import axios from "axios";
import { dataBasePath } from "utils/globalRoutes/globalRoutes.utils";

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

export const readDatabase = async (database:string) => {
  const url = `${dataBasePath}${database}`;
  
  try {
    const data = await axios.get(url).then((response) => {
      return response.data;
    });
    return data;
  } catch (error) {
    throw new Error(
      `Pojawił się problem przy czytaniu elementu(${database}): ${error}`
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