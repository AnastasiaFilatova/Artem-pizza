export const postIngredient = (data) => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/ingredients`, {
    method: "POST",
    body: data,
  }).then((response) => response.json());
};
