import { getOrders } from "../../api";
import { ordersError, ordersSuccess, requestOrders } from "./actions";

export const fetchOrders = () => async (dispatch) => {
  dispatch(requestOrders());
  try {
    const data = await getOrders();
    dispatch(ordersSuccess(data));
  } catch (error) {
    dispatch(ordersError(error));
  }
};
