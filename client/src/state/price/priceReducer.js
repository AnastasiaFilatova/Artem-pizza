export const priceReducer = (state = 0, action) => {
  switch (action.type) {
    case "price/set_price": {
      return action.payload;
    }
    default:
      return state;
  }
};
