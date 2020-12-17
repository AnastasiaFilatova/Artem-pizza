export const getIngredients = async () => {
  return fetch("http://localhost:4000/ingredients").then((res) => res.json());
};
