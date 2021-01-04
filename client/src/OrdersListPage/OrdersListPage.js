import { getOrders, getIsLoading } from "../state/orders/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOrders } from "../state/orders/thunk";

export const OrdersListPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  const state = useSelector((state) => state);
  console.log("orers list page state ", state);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  const orders = useSelector(getOrders);

  if (isLoading) {
    return <>Заказы загружаются...</>;
  }

  if (!orders) {
    return <h1>У вас нет заказов</h1>;
  }
  return (
    <>
      <h1>Заказы</h1>
      <p>{JSON.stringify(orders)}</p>
    </>
  );
};
