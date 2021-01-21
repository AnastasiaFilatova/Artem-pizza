export const postIngredient = (data) => {
  return fetch("https://i4qqz.sse.codesandbox.io/ingredients", {
    method: "POST",
    body: data,
  }).then((response) => response.json());
};
