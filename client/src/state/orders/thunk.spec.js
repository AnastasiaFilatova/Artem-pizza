import { getOrders } from "../../api";
import { fetchOrders } from "./thunk";

jest.mock("../../api", () => {
  getOrders: async () => ({ orders: [] });
});

describe("fetchOrders", () => {
  it("fetches orders from the server", async () => {
    const dispatch = jest.fn();
    await fetchOrders()(dispatch, getState);
    expect(dispatch).toBeCalledWith({ type: orders / request, orders: [] });
  });
});
