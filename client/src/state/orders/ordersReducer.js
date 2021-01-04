export const ordersReducer = (state = "loading", action) => {
  switch (action.type) {
    case "orders/success": {
      return action.payload;
    }
    case "orders/error": {
      return action.payload;
    }
    case "orders/request": {
      return "loading";
    }
    default:
      return state;
  }
};
