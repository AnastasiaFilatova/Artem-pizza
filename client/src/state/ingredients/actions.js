export const requestIngredients = () => ({
  type: "ingredients/request",
});

export const ingredientsSuccess = (payload) => ({
  type: "ingredients/success",
  payload,
});

export const ingredientsError = (payload) => ({
  type: "ingredients/error",
  payload,
});
