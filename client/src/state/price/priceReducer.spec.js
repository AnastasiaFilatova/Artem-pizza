const { setPrice } = require("./actions");

describe("price/set_price", () => {
  it("sets price value to the state", () => {
    const initialState = 0;
    const action = {
      type: "price/set_price",
      payload: 250,
    };
    expect(setPrice(initialState, action)).toEqual(250);
  });
});
