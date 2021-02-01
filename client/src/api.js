export const getIngredients = async () => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/ingredients`).then((res) =>
    res.json()
  );
};

export const postOrder = async (order) => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/orders`, {
    method: "POST",
    body: JSON.stringify(order),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((res) => res.json());
};

export const getOrders = async () => {
  return fetch(`${process.env.REACT_APP_API_SERVER}/orders`).then((res) =>
    res.json()
  );
};
