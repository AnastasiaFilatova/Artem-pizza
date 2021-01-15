import { getOrders } from "./selectors";
import { getIsLoading } from "./selectors";

describe("getOrders", () => {
  it("fetches orders from the state", () => {
    const state = {
      orders: [],
    };
    expect(getOrders(state)).toEqual([]);
  });
});

describe("getIsLoading", () => {
  it("fetches orders state", () => {
    const state = {
      orders: "loading",
    };
    expect(getOrders(state)).toEqual("loading");
  });
});
