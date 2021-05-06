const { getPrice } = require("./selectors");

describe("getPrice", () => {
  it("gets price from the state state", () => {
    const state = { price: 200 };
    expect(getPrice(state)).toEqual(200);
  });
});
