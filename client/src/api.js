export const getIngredients = async () => {
  return fetch("http://localhost:4000/ingredients").then((res) => res.json());
};

export const postOrder = async (order) => {
  return fetch("http://localhost:4000/orders", {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
};
