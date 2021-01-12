export const getIngredients = async () => {
  return fetch("https://i4qqz.sse.codesandbox.io/ingredients").then((res) =>
    res.json()
  );
};

export const postOrder = async (order) => {
  return fetch("https://i4qqz.sse.codesandbox.io/orders", {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
};

export const getOrders = async () => {
  return fetch("https://i4qqz.sse.codesandbox.io/orders").then((res) =>
    res.json()
  );
};
