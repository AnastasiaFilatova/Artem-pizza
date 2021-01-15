import { ordersReducer } from "./ordersReducer";

const state = "loading";

describe("ordersReducer", () => {
  it("returns orders data when calling orders/success action", () => {
    const payload = [
      {
        id: "zlYBGTLu",
        name: "afilatova",
        ingredients: [
          "35cm",
          "thick",
          "spicy_sauce",
          "tomato_sauce",
          "white_sauce",
          "mozarella",
          "olives",
          "bacon",
          "chicken",
          "ham",
        ],
        card_number: 1111111111111111,
      },
    ];
    const action = { type: "orders/success", payload: payload };
    expect(ordersReducer(state, action)).toEqual(payload);
  });

  it("returns initial state when calling orders/error action", () => {
    const action = { type: "orders/error", payload: [] };
    expect(ordersReducer(state, action)).toEqual(state);
  });

  it("returns initial state when calling orders/request action", () => {
    const action = { type: "orders/request", payload: [] };
    expect(ordersReducer(state, action)).toEqual(state);
  });
});
