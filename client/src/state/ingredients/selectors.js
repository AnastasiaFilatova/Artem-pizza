export const getIngredients = (state) => state.ingredients;

export const getIngredientsByCategory = (category) => (state) => {
  if (state.ingredients === "loading") {
    return [];
  }
  return state.ingredients.filter((item) => item.category === category);
};

export const getIsLoading = (state) => state.ingredients === "loading";
