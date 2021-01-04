export const requestOrders = () => ({
  type: "orders/request",
});

export const ordersSuccess = (payload) => ({
  type: "orders/success",
  payload,
});

export const ordersError = (payload) => ({
  type: "orders/error",
  payload,
});
