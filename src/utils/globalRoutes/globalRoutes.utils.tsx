const index = window.location.href.lastIndexOf("/");

export const homePath = window.location.href.slice(0, index + 1);

export const categoriesPath = "http://localhost:3000/categories";
export const orderHistoryPath = "http://localhost:3000/orderHistory";
