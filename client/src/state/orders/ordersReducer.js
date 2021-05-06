export const ordersReducer = (state = "loading", action) => {
  switch (action.type) {
    case "orders/success": {
      return action.payload;
    }
    case "orders/error": {
      return state;
    }
    case "orders/request": {
      return state;
    }
    default:
      return state;
  }
};
