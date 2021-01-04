import { getOrders, getIsLoading } from "../state/orders/selectors";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchOrders } from "../state/orders/thunk";
import { getAuthorisation } from "../state/authorisation/selectors";

export const OrdersListPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const isAuthorised = useSelector(getAuthorisation);

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  const orders = useSelector(getOrders);

  if (!isAuthorised) {
    return <Redirect to="/login" />;
  }

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
