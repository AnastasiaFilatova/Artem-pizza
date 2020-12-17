export const ingredientsReducer = (state = "loading", action) => {
  switch (action.type) {
    case "ingredients/success": {
      return action.payload;
    }
    case "ingredients/error": {
      return action.payload;
    }
    case "ingredients/request": {
      return "loading";
    }
    default:
      return state;
  }
};
